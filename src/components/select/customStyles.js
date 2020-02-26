export const customStyles = {
  boxShadow: 'none',
  indicatorSeparator: () => ({
    display: 'none',
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#000033' : 'transparent',
    display: 'flex',
    border: state.isFocused ? 'solid 1px var(--text-color-secondary)' : 'solid 1px transparent',
    borderRadius: state.isFocused ? '3px 3px 0 0' : '3px',
    minHeight: '32px',
    opacity: state.isDisabled ? 0.4 : 1,

    '&:hover': {
      border: 'solid 1px var(--text-color-secondary)',
    },
    boxShadow: 'none',
  }),
  container: (provided, state) => ({
    ...provided,
    border: 'none',
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: '#000033',
    border: 'solid 1px var(--text-color-secondary)',
    borderRadius: '0 0 3px 3px',
    marginTop: '-2.5px',
    borderTop: 'none',
  }),
  singleValue: provided => ({
    ...provided,
    color: 'var(--text-color)',
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isFocused || state.isSelected ? '#000033' : 'var(--text-color)',
    backgroundColor:
      state.isFocused || state.isSelected ? 'var(--tertiary-color)' : 'var(--primary-color)',
    padding: '4px 8px',
    '&:active': {
      backgroundColor: 'var(--tertiary-color)',
      color: '#000033',
    },
  }),
}
