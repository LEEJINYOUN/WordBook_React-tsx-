export type CssType = string;
export type NavbarType = any;
export type UserInfoType = {
  id: string;
  email: string;
  nickname: string;
  name: string;
};

export type RegisterType = {
  inputMainCss: CssType;
  inputInputCss: CssType;
};

export interface LoginType extends RegisterType {
  setUser: React.Dispatch<React.SetStateAction<UserInfoType | null>>;
}

export type WordbookType = {
  Navbar: NavbarType;
  LocalData: UserInfoType | null;
};

export type OnClickType = {
  e: React.MouseEvent<SVGElement, MouseEvent>;
  id: string;
};

export type SearchFormType = {
  searchWord: string;
  onSearchChange: React.ChangeEventHandler;
};

export type AddWordModalType = {
  onAddModal: any;
  writer: string | undefined;
  today: object;
  enWord: string;
  setEnWord: React.Dispatch<React.SetStateAction<string>>;
  krWord: string;
  setKrWord: React.Dispatch<React.SetStateAction<string>>;
};

export interface AddWordModalFormType extends WordObjectType {
  addWordInputChange: React.ChangeEventHandler;
  addWordSubmit: React.FormEventHandler;
}

export interface QuizType extends RegisterType, WordbookType {}

export type WordObjectType = {
  enWord: string;
  krWord: string;
};

export type AnswersType = {
  writer: string | undefined;
  today: string;
  matchedArr: WordObjectType[];
  NotMatchedArr: WordObjectType[];
};

export type QuizMainFormType = {
  WORDS: number;
  getWords: Array<any>[];
  booleanChange: any;
  onRecordsRead: () => void;
};

export type QuizFormType = {
  btnStart: boolean;
  INDEX: number;
  question: Array<WordObjectType>;
  matched: boolean;
  notMatched: boolean;
  onSubmit: any;
  inputMainCss: CssType;
  inputInputCss: CssType;
  answer: string;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
  quizStopBtn: () => void;
  booleanChange: any;
};

export type QuizEndModalType = {
  getWords: Array<any>[];
  matchedArr: object[];
  NotMatchedArr: object[];
  onCurrentRecord: () => void;
};

export type CurrentRecordModalType = {
  matchedArr: WordObjectType[];
  NotMatchedArr: WordObjectType[];
  onCurrentRecordClose: () => void;
};

export type ItemType = {
  _id: string;
  today: string;
};

export type RecordsReadModalType = {
  getRecords: ItemType[];
  onDateRecord: any;
  onRecordsReadClose: () => void;
};

export type RecordDateModalType = {
  getRecordDateMatched: Array<any>;
  getRecordDateNotMatched: Array<any>;
  onCurrentRecordClose: () => void;
};

export type GetUserInfoType = {
  LocalData: UserInfoType | null;
};

export interface ProfileType extends GetUserInfoType {
  Navbar: NavbarType;
  setUser: React.Dispatch<React.SetStateAction<UserInfoType | null>>;
}

export type BooleanChangeType = {
  booleanChange: any;
};

export interface WithdrawalModalType extends GetUserInfoType {
  modalToggle: () => void;
  setUser: React.Dispatch<React.SetStateAction<UserInfoType | null>>;
}