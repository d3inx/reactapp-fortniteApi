import { Listbox } from "@headlessui/react";

export default function FilterListBox({
  listItem,
  selectedType,
  selectedRarity,
  selectedSort,
  setSelected,
}) {
  const setPlatform = (e) => {
    selectedType !== undefined
      ? setSelected((prevState) => ({ ...prevState, type: e }))
      : selectedRarity !== undefined
      ? setSelected((prevState) => ({ ...prevState, rarity: e }))
      : setSelected((prevState) => ({ ...prevState, sort: e }));
  };
  return (
    <div className="w-full my-2 md:my-0 md:w-1/6 z-50">
      <Listbox
        value={
          selectedType !== undefined
            ? selectedType
            : selectedRarity === undefined
            ? selectedSort
            : selectedRarity
        }
        onChange={(e) => setPlatform(e)}
      >
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              {selectedType !== undefined
                ? selectedType
                : selectedRarity === undefined
                ? selectedSort
                : selectedRarity}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {listItem.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {person}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
