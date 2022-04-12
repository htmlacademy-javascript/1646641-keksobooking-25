const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser =  document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const housingPhotoChooser = document.querySelector('#images');
const housingPhotoContainer = document.querySelector('.ad-form__photo');

const housingPhoto = document.createElement('img');
housingPhoto.width = '70';
housingPhoto.height = '70';
housingPhoto.alt = 'Фотография пользователя';

const showChosenPhoto = (fileChoser, preview) => {
  const file = fileChoser.files[0];
  const fileName = file.name.toLowerCase();

  const isMatches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (isMatches) {
    preview.src = URL.createObjectURL(file);
  }
};

const removeChosenPhotos = () => {
  avatarPreview.src = 'img/muffin-grey.svg';
  housingPhotoContainer.innerHTML = '';
};

avatarChooser.addEventListener('change', () => {
  showChosenPhoto(avatarChooser, avatarPreview);
});

housingPhotoChooser.addEventListener('change', () => {
  showChosenPhoto(housingPhotoChooser, housingPhoto);

  if (!housingPhotoContainer.childNodes.length) {
    housingPhotoContainer.append(housingPhoto);
  }
});

export {removeChosenPhotos};
