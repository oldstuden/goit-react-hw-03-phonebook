export const Filter = ({ value, changeFilter }) => {
  return (
    <div>
      <label>
        Find contact
        <input
          type="text"
          name="filter"
          value={value}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};
