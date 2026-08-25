function showLesson(id) {
  document.querySelectorAll('.lesson').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.topic-link').forEach(l => l.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}
