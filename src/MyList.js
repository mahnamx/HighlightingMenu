import SearchBar from "./SearchBar";
import List from "./List";
import { foods } from "./data";
import { useState } from "react";

export default function MyList() {
  const [filter, setFilter] = useState("");

  const handlefilter = (item) => {
    setFilter(item);
  };

  const filterFoodsList = (foods, searched) => {
    searched = searched.toLowerCase();
    let filteredItems = foods.filter((food) =>
      food.name.split(" ").some((word) => {
        return word.toLowerCase().startsWith(searched);
      })
    );
    return highlightedFoods(filteredItems, searched);
  };

  const highlightedFoods = (filteredItems, searched) => {
    return filteredItems.map((obj) => ({
      ...obj,
      name: obj.name.replace(
        new RegExp("(" + searched + ")", "ig"),
        "<mark>$1</mark>"
      ),
      description: obj.description.replace(
        new RegExp("(" + searched + ")", "ig"),
        "<mark>$1</mark>"
      )
    }));
  };

  return (
    <>
      <SearchBar filter={filter} setFilter={handlefilter} />
      <hr />
      {filterFoodsList(foods, filter).map((food) => {
        return <List food={food} />;
      })}
    </>
  );
}
