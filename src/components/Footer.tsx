function Footer(props: { isLight: boolean }) {
  return (
    <footer
      className={`${
        props.isLight ? "bg-zinc-800 text-white" : "bg-[#F5F5F5] text-black"
      } p-8`}
    >
      FOOTER
    </footer>
  );
}

export default Footer;
