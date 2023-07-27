import { AddWordModalFormType, CssType } from "./TypeAlias";

export default function AddWordModalForm({
  enWord,
  krWord,
  addWordInputChange,
  addWordSubmit,
}: AddWordModalFormType) {
  const AddWordModalFormCss: CssType = `mx-auto px-6 flex justify-center items-center w-[85%] h-[45px] rounded-lg text-base sm:text-lg outline-none`;
  return (
    <form
      className="h-[90%] flex flex-col justify-center"
      onSubmit={addWordSubmit}
    >
      <input
        className={`${AddWordModalFormCss} my-3 border border-gray-300`}
        type="text"
        name="en"
        placeholder="단어"
        required
        value={enWord}
        onChange={addWordInputChange}
      />
      <input
        className={`${AddWordModalFormCss} my-3 border border-gray-300`}
        type="text"
        name="kr"
        placeholder="뜻"
        required
        value={krWord}
        onChange={addWordInputChange}
      />
      <input
        className={`${AddWordModalFormCss} duration-200 hover:bg-blue-500 hover:font-extrabold my-7 bg-blue-300 text-white cursor-pointer`}
        type="submit"
        value="등록"
      />
    </form>
  );
}
