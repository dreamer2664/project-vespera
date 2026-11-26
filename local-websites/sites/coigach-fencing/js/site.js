// Offline Interactive Helper (Filter tables, toggle schedule epochs, preview local form)
document.addEventListener('DOMContentLoaded', function() {
  var searchInputs = document.querySelectorAll('[data-table-filter]');
  searchInputs.forEach(function(inp) {
    var targetId = inp.getAttribute('data-table-filter');
    var tbl = document.getElementById(targetId);
    if (!tbl) return;
    inp.addEventListener('input', function() {
      var q = inp.value.toLowerCase();
      var rows = tbl.querySelectorAll('tbody tr');
      rows.forEach(function(r) {
        r.style.display = r.textContent.toLowerCase().indexOf(q) !== -1 ? '' : 'none';
      });
    });
  });
  var form = document.getElementById('offline-enquiry-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var out = document.getElementById('form-offline-notice');
      if (out) {
        out.style.display = 'block';
        out.textContent = 'Offline Archive Mode: Form submission disabled in preserved snapshot. Please refer to telephone or postal details listed on this page.';
      }
    });
  }
});
