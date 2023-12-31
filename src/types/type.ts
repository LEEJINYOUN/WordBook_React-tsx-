export type NavigateType = any;
export type CssType = string;
export type NavbarType = any;
export interface UserInfoType {
  id: string;
  email: string;
  nickname: string;
  name: string;
}

export interface GoToAuthType {
  to: string;
  text: string;
  buttonText: string;
}

export interface RegisterType extends NavigateType {
  inputMainCss: CssType;
  inputInputCss: CssType;
}

export interface AuthContextType {
  currentUser: any;
  setCurrentUser: any;
}

export interface AuthContextProviderType {
  children: React.ReactNode;
}

export interface AuthUserInfoType {
  id: string;
  email: string;
  nickname: string;
  name: string;
}

export interface OnClickType {
  e: React.MouseEvent<SVGElement, MouseEvent>;
  id: string;
}

export interface SearchFormType {
  searchWord: string;
  onSearchChange: React.ChangeEventHandler;
}

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

export interface QuizType extends RegisterType {
  navigate: any;
}

export interface WordObjectType {
  enWord: string;
  krWord: string;
}

export interface QuizResultArrType {
  MATCH_ARR: WordObjectType[];
  NOT_MATCH_ARR: WordObjectType[];
}

export interface AnswersType extends QuizResultArrType {
  writer: string | undefined;
  today: string;
}

export interface ButtonChangeType {
  buttonChange: any;
}

export interface QuizMainFormType extends ButtonChangeType {
  getWords: Array<any>[];
  onRecordsRead: () => void;
}

export interface QuizFormType extends ButtonChangeType {
  btnStart: boolean;
  QUIZ_INDEX: number;
  question: Array<WordObjectType>;
  matched: boolean;
  notMatched: boolean;
  onSubmit: any;
  inputMainCss: CssType;
  inputInputCss: CssType;
  answer: string;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
  quizStopBtn: () => void;
}

export interface QuizEndModalType extends NavbarType, QuizResultArrType {
  getWords: Array<any>[];
  onCurrentRecord: () => void;
}

export interface CurrentRecordModalType extends QuizResultArrType {
  onCurrentRecordClose: () => void;
}

export interface ItemType {
  _id: string;
  today: string;
}

export interface RecordsReadModalType {
  getRecords: ItemType[];
  onDateRecord: any;
  onRecordsReadClose: () => void;
}

export interface RecordDateModalType {
  getRecordDateMatched: Array<any>;
  getRecordDateNotMatched: Array<any>;
  onCurrentRecordClose: () => void;
}

export interface ProfileType {
  navigate: any;
}

export interface WithdrawalModalType {
  modalToggle: () => void;
  navigate: any;
}

export interface WordbookTopType {
  searchWord: string;
  onSearchChange: React.ChangeEventHandler;
  localGetOrder: any;
  onOrderSelected: any;
}

export interface WordbookItemLeftType {
  itemKey: any;
  enWord: string;
  krWord: string;
}

export interface WordbookItemRightType {
  bookmark: boolean;
  id: string;
}

export interface OnBoardReadType {
  e: React.MouseEvent<HTMLDivElement, MouseEvent>;
  id: string;
}

export interface OnDeleteBoardType {
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  id: string;
}

export interface BoardTopType {
  onSearchBoardChange: React.ChangeEventHandler;
  searchBoard: string;
  onCategorySelected: any;
}

export interface BoardSearchFormType {
  onSearchBoardChange: React.ChangeEventHandler;
  searchBoard: string;
}

export interface AddBoardModalType {
  writer: string | undefined;
  onAddBoardModalToggle: () => void;
}

export interface BoardReadModalType {
  setBoardReadModal: React.Dispatch<React.SetStateAction<boolean>>;
  boardRead: any[];
  writer: string | undefined;
}

export interface BoardPaginationType {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pages: number[];
}
