export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 py-6 mt-[2rem] max-w-screen-2xl w-full">
      <div className="text-center">
        <p className="text-md text-black">
          Copyright &copy; {currentYear} Speedy Tune Up&apos;s Fleet Services
        </p>
      </div>
    </footer>
  );
}
