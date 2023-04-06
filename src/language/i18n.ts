import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';

import en from './locales/en.json';
import vi from './locales/vi.json';

// Định nghĩa các ngôn ngữ được hỗ trợ
i18n.translations = {en, vi};

// Đặt ngôn ngữ mặc định là tiếng Anh
i18n.defaultLocale = 'en';

// Xác định ngôn ngữ hiện tại của thiết bị
const {languageTag} = RNLocalize.getLocales()[0];

// Đặt ngôn ngữ hiện tại cho i18n
i18n.locale = languageTag;

export default i18n;
