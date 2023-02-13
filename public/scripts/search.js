// Redirect to homepage on submit
$(document).ready(() => {
  $('form').on('submit', submitSearch);
});

const submitSearch = function(event) {
  // Initial settings
  event.preventDefault();

  // content
  const data = $(this).serialize();
  $.post("/search", data);
};
