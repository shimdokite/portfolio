import Contacts from './Contacts';

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col justify-center items-center py-10">
        <Contacts component="footer" />

        <p className="text-blue-90 text-xs font-normal">
          © Developed by Shimdoyeon
        </p>
      </div>
    </footer>
  );
}
