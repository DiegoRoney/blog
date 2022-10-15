import Image from "next/image";
import img404 from "../public/404.png";

export default function Pagina404() {
  return (
    <div className="pg404">
      <div>
        <Image src={img404} alt="404" height="450" width="550" />
      </div>
      <h3>Página não encontrada</h3>
    </div>
  );
}
