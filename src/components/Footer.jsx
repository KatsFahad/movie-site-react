const Footer = () => {
  return (
    <div className="mt-[40px] p-[35px] bg-[black] mx-[1.5rem] mb-[1rem]">
      <p className="text-center text-white">Copyright &copy;2024 Movie Site.</p>
      <div className="text-center mt-[20px]">
        <select>
          <option>English</option>
          <option>Detush</option>
          <option>Arabic</option>
          <option>French</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
