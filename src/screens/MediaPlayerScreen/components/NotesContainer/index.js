import {
  View, Text, TouchableOpacity, TextInput,
} from 'react-native';
import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './styles';
import { vh } from '../../../../common/Dimensions';
import { ColorTheme } from '../../../../common/AppStyles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import SvgIcon from '../../../../common/SvgIcon';
import { ThemeContext } from '../../../../common/ThemeProvider';

export function NotesContainer({
  value, cancel, onChangeNotePadSize, fullNotePad, submitText, updateNote,
}) {
  const { darkMode } = useContext(ThemeContext);
  const Styles = useThemedStyles(styles);
  const [textValue, setTextValue] = useState(value || '');
  const { translations } = useContext(LocalizationContext);
  const mediaPlayerState = useSelector((state) => state.reducerMediaPlayer);
  const { isUpdatingNotes } = mediaPlayerState;

  return (
    <View style={Styles.notesMainContainer}>
      <View style={Styles.takeNotesContainer}>
        <Text style={Styles.videosHeadingStyle}>{`${translations.TAKE_NOTES}`}</Text>
        <TouchableOpacity
          onPress={onChangeNotePadSize}
        >
          {darkMode ? <SvgIcon.DarkMediaPlayerUpArrow /> : <SvgIcon.MediaPlayerUpArrow />}

        </TouchableOpacity>
      </View>
      <View style={fullNotePad
        ? { ...Styles.inputMainContainer, height: vh(520) } : Styles.inputMainContainer}
      >
        <TextInput
          style={Styles.inputContainer}
          value={textValue}
          autoFocus
          multiline
          onChangeText={(item) => { setTextValue(item); }}
        />
      </View>
      <View style={Styles.notesContainer}>
        <TouchableOpacity
          style={[Styles.submitContainer, {
            backgroundColor: ColorTheme.white,
            borderColor: ColorTheme.BUTTON_BACKGROUND_01,
          }]}
          onPress={cancel}
        >
          <Text style={[Styles.submitText, { color: ColorTheme.BUTTON_BACKGROUND_01 }]}>
            {translations.CANCEL}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={textValue.length === 0}
          style={[Styles.submitContainer, {
            borderColor: ColorTheme.BUTTON_BACKGROUND_02,
          }]}
          onPress={isUpdatingNotes ? () => updateNote(textValue) : () => submitText(textValue)}
        >
          <Text style={Styles.submitText}>{translations.MEDIA_SUBMIT}</Text>
        </TouchableOpacity>

      </View>
    </View>

  );
}

NotesContainer.propTypes = {
  value: propTypes.any,
  cancel: propTypes.any,
  onChangeNotePadSize: propTypes.any,
  fullNotePad: propTypes.any,
  submitText: propTypes.any,
  updateNote: propTypes.func,
};
