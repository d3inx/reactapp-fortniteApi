import { Switch } from "@headlessui/react";

export default function Toggle({ setItems, enabled, setEnabled }) {
  const toggleData = (e) => {
    setItems((prevState) => {
      let newItems = prevState;
      newItems.sort((a, b) => (a.type.value > b.type.value ? 1 : -1));
      return [...newItems];
    });
    setEnabled(e);
  };
  return (
    <div className="flex items-center px-2">
      <Switch
        checked={enabled}
        onChange={(e) => toggleData(e)}
        className={`${enabled ? "bg-gray-900" : "bg-zinc-700/60"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
