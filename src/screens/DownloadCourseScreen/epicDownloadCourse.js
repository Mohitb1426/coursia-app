import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { GET_OFFLINE_DOWNLOAD, setOfflineDownloadData } from './actionDownloadCourse';
import { gettingErrorOnMedia } from '../MediaPlayerScreen/actionMediaPlayer';

async function getOfflineData(body) {
  const { path } = body;
  return new Promise((resolve, reject) => {
    const offlineVideoData = [];
    ReactNativeBlobUtil.fs.ls(path)
      .then((course) => {
        for (let i = 0; i < course.length; i += 1) {
          ReactNativeBlobUtil.fs.ls(`${path}/${course[i]}`).then((unit) => {
            for (let j = 0; j < unit.length; j += 1) {
              ReactNativeBlobUtil.fs.ls(`${path}/${course[i]}/${unit[j]}`).then((title) => {
                for (let k = 0; k < title.length; k += 1) {
                  const tempTitle = title[k].replace(/_/g, ' ');
                  const downloadUnit = unit[j].split('+');
                  const courseData = course[i].split('+');
                  const data = {
                    url: `${path}/${course[i]}/${unit[j]}/${title[k]}`,
                    title: tempTitle.substring(0, tempTitle.indexOf('.')),
                    unit: downloadUnit[0].replace(/_/g, ' '),
                    courseName: courseData[0].replace(/_/g, ' '),
                    courseId: courseData[1],
                    unitId: downloadUnit[1],
                    questionNo: tempTitle?.split('+')[2]?.split('.')[0],
                  };
                  offlineVideoData.push(data);
                  if (k === title.length - 1) {
                    const successObject = {
                      code: 200,
                      message: 'Success',
                      data: offlineVideoData,
                    };

                    resolve(successObject);
                  }
                }
              });
            }
          });
        }
      }).catch(() => {
        const failObject = {
          code: 201,
          message: 'Fail',
        };
        reject(failObject);
      });
  });
}

const epicOfflineData = (action$) => action$.pipe(
  ofType(GET_OFFLINE_DOWNLOAD),
  pluck('payload'),
  mergeMap((data) => {
    const { isTamil } = data;
    const path = `${ReactNativeBlobUtil.fs.dirs.DownloadDir}/.Veranda/${isTamil}`;
    const body = {
      path,
    };
    return from(getOfflineData(body)).pipe(
      map((res) => {
        if (res?.code === 200) return setOfflineDownloadData(res?.data);
        return gettingErrorOnMedia(res);
      }),
      takeUntil(action$.pipe(ofType(GET_OFFLINE_DOWNLOAD))),
      catchError((error) => {
        return of(gettingErrorOnMedia(error.response?.data?.message || ''));
      }),
    );
  }),
);

export default epicOfflineData;
