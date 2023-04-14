export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    // will adjust height of footer once last
    <footer className="bg-gray-200 py-4 mt-[80rem]">
      <div className="container mx-auto text-center">
        <p className="text-md text-black">
          Copyright &copy; 2016 - {currentYear} Speedy Tune Up&apos;s Fleet
          Services
        </p>
      </div>
    </footer>
  );
}
