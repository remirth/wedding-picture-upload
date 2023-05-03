'use client';

import {useRef} from 'react';

function handleUploadResponse(
  e: React.SyntheticEvent<HTMLIFrameElement, Event>,
  formElement: HTMLFormElement | null
) {
  const response = (
    e.target as HTMLIFrameElement
  ).contentWindow?.document.querySelector('body')?.textContent;

  if (response === 'ok') {
    alert('Uppladdningen lyckades!');
    formElement?.reset();
  } else {
    alert('Något gick fel. Försök igen.');
    console.error(response);
  }
}

export const ImageUploadForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <form
        className='flex flex-col pb-6'
        action='/api/upload'
        method='POST'
        encType='multipart/form-data'
        target='resultTarget'
        ref={formRef}
      >
        <input
          type='file'
          accept='image/*'
          name='image'
          multiple
          className='file-input-bordered file-input-primary file-input mx-auto mt-6 w-full max-w-sm'
        />
        <input
          className='btn-success btn ml-auto mt-6 w-28'
          type='submit'
          value='Ladda up'
        />
      </form>
      <iframe
        name='resultTarget'
        className='hidden'
        id='resultTarget'
        onLoad={(e) => handleUploadResponse(e, formRef.current)}
      />
    </>
  );
};
