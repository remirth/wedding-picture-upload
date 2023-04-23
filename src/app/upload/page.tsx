import {ImageUploadForm} from './image_upload_form';
export const runtime = 'edge';

export default function Page() {
  return (
    <>
      <article className='border-y-4 border-solid border-base-300 text-center text-primary'>
        <h1 className='text-lg'>Ladda upp till Galleriet</h1>
        <p className='mx-auto w-5/6 text-sm'>
          Dela kvällens bilder med resten av sällskapet genom att välja era
          bilder och sedan klicka &quot;Ladda upp&quot;.
        </p>
      </article>
      <ImageUploadForm />
    </>
  );
}
