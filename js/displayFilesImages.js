function previewMultiple(event) {
  const form = document.querySelector("#formFile");
  const images = document.getElementById("image");
  const number = images.files.length;

  form.innerHTML = "";

  for (i = 0; i < number; i++) {
    const urls = URL.createObjectURL(event.target.files[i]);
    form.innerHTML += '<img src="' + urls + '" class="ms-3">';
  }
}
