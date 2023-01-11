export default function SearchBar({ filter, setFilter }) {
  const handleChange = (e) => {
    setFilter(e.currentTarget.value);
  };
  return (
    <label>
      Search: <input type="text" value={filter} onChange={handleChange} />
    </label>
  );
}
