import ExampleSlider from '@/app/[locale]/_components/ExampleSlider';

export default async function Page() {
  return (
    <main>
      <div
        className={`
            w-full h-[calc(100dvh-64px)] 
            overflow-hidden
            flex flex-col items-center
      `}
      >
        <h1>s</h1>
        <ExampleSlider />
      </div>
    </main>
  );
}
