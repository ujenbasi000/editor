const handleReverse = (regex, api, state, start, end, otherNegative = 0) => {
  // Does not support `Heading`, `image`, `Link`

  if (state.selectedText.match(regex)) {
    api.replaceSelection(
      state.selectedText.slice(start, state.selectedText.length - end).trim()
    );
    api.setSelectionRange({
      start: state.selection.start,
      end: state.selection.end - otherNegative - (start - end + (start + end)),
    });
    return true;
  }
  return false;
};

export default handleReverse;
