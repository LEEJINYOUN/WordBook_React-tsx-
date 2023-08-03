export type NavigateType = any;
export type CssType = string;
export type NavbarType = any;
export type UserInfoType = {
  id: string;
  email: string;
  nickname: string;
  name: string;
};

export interface RegisterType extends NavigateType {
  inputMainCss: CssType;
  inputInputCss: CssType;
}

export interface LoginType extends RegisterType, NavigateType {
  setUser: React.Dispatch<React.SetStateAction<UserInfoType | null>>;
}

export interface WordbookType {
  Navbar: NavbarType;
  LocalData: UserInfoType | null;
}

export interface OnClickType {
  e: React.MouseEvent<SVGElement, MouseEvent>;
  id: string;
}

export type SearchFormType = {
  searchWord: string;
  onSearchChange: React.ChangeEventHandler;
};

export interface AddWordModalType {
  onAddModal: any;
  writer: string | undefined;
  today: object;
  enWord: string;
  setEnWord: React.Dispatch<React.SetStateAction<string>>;
  krWord: string;
  setKrWord: React.Dispatch<React.SetStateAction<string>>;
}

export interface AddWordModalFormType extends WordObjectType {
  addWordInputChange: React.ChangeEventHandler;
  addWordSubmit: React.FormEventHandler;
}

export interface QuizType extends RegisterType, WordbookType, NavbarType {}

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

export interface QuizEndModalType extends NavbarType {
  getWords: Array<any>[];
  matchedArr: object[];
  NotMatchedArr: object[];
  onCurrentRecord: () => void;
}

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
  navigate: any;
}

export type BooleanChangeType = {
  booleanChange: any;
};

export interface WithdrawalModalType extends GetUserInfoType {
  modalToggle: () => void;
  setUser: React.Dispatch<React.SetStateAction<UserInfoType | null>>;
  navigate: any;
}

export type WordbookTopType = {
  searchWord: string;
  onSearchChange: React.ChangeEventHandler;
  localGetOrder: any;
  onOrderSelected: any;
};

export type WordbookItemLeftType = {
  itemKey: any;
  enWord: string;
  krWord: string;
};

export interface WordbookItemRightType {
  bookmark: boolean;
  id: string;
}

export type OnBoardReadType = {
  e: React.MouseEvent<HTMLDivElement, MouseEvent>;
  id: string;
};

export type OnDeleteBoardType = {
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  id: string;
};

export type BoardTopType = {
  onSearchBoardChange: React.ChangeEventHandler;
  searchBoard: string;
  onCategorySelected: any;
};

export interface BoardSearchFormType {
  onSearchBoardChange: React.ChangeEventHandler;
  searchBoard: string;
}

export type AddBoardModalType = {
  writer: string | undefined;
  onAddBoardModalToggle: () => void;
};

export type BoardReadModalType = {
  setBoardReadModal: React.Dispatch<React.SetStateAction<boolean>>;
  boardRead: any[];
  writer: string | undefined;
};

export type BoardPaginationType = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pages: number[];
};
