// Redirect to homepage on submit
$(document).ready(() => {
  $('form').on('submit', submitSearch);
});

const submitSearch = function(event) {
  // content
  const data = $(this).serialize();
  console.log(data);
  return $.ajax({
    method: "GET",
    url: "/",
    data
  });
};
