export const customStyles = {
  boxShadow: 'none',
  indicatorSeparator: () => ({
    display: 'none',
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#000033' : 'transparent',
    display: 'flex',
    border: state.isFocused ? 'solid 1px #F9FAFA' : 'solid 1px transparent',
    borderRadius: state.isFocused ? '3px 3px 0 0' : '3px',
    minHeight: '32px',
    opacity: state.isDisabled ? 0.4 : 1,

    '&:hover': {
      border: 'solid 1px #F9FAFA',
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
    border: 'solid 1px #F9FAFA',
    borderRadius: '0 0 3px 3px',
    marginTop: '-2.5px',
    borderTop: 'none',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#FFFFFF',
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isFocused || state.isSelected ? '#000033' : '#FFFFFF',
    backgroundColor:
      state.isFocused || state.isSelected ? 'var(--green)' : '#000033',
    padding: '4px 8px',
    '&:active': {
      backgroundColor: 'var(--green)',
      color: '#000033',
    },
  }),
}
