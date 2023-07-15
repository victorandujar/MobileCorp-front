const MobileDetail = ({ mobile }) => {
  return (
    <div>
      <h2>
        {mobile?.brand} {mobile?.model}
        <span>{mobile?.announced}</span>
      </h2>
      <div>
        <img
          src={mobile?.imgUrl}
          alt={`${mobile?.brand} ${mobile?.model} mobile`}
        />
        <div>
          <span>Specifications:</span>
          <ul>
            <li>
              <span>Dimentions: </span>
              {mobile?.dimentions}
            </li>
            <li>
              <span>Weight: </span>
              {mobile?.weight}g
            </li>
            <li>
              <span>OS:</span> {mobile?.os}
            </li>
            <li>
              <span>CPU:</span> {mobile?.cpu}
            </li>
            <li>
              <span>GPU:</span> {mobile?.gpu}
            </li>
            <li>
              <span>Chipset:</span> {mobile?.chipset}
            </li>
            <li>
              <span>Internal memory:</span> {mobile?.interalMemory?.join(" / ")}
            </li>
            <li>
              <span>External memory:</span> {mobile?.externalMemory}
            </li>
            <li>
              <span></span> {mobile?.ram}
            </li>
            <li>
              <span>Sim:</span> {mobile?.sim}
            </li>
            <li>
              <span>GPRS:</span> {mobile?.gprs}
            </li>
            <li>
              <span>Edge:</span> {mobile?.gprs}
            </li>
            <li>
              <span>Network technology:</span> {mobile?.networkTechnology}
            </li>
            <li>
              <span>Network speed:</span> {mobile?.networkSpeed}
            </li>
            <li>
              <span>Display type:</span> {mobile?.displayType}
            </li>
            <li>
              <span>Display resolution:</span> {mobile?.displayResolution}
            </li>
            <li>
              <span>Display Size:</span> {mobile?.displaySize}
            </li>
            <li>
              <span>Main camera:</span> {mobile?.primaryCamera?.join(" + ")}
            </li>
            <li>
              <span>Front camera:</span> {mobile?.secondaryCamera?.join(" + ")}
            </li>
            <li>
              <span>Speaker:</span> {mobile?.speaker}
            </li>
            <li>
              <span>Audio jack:</span> {mobile?.audioJack}
            </li>
            <li>
              <span>W-Lan:</span> {mobile?.wlan?.join(" / ")}
            </li>
            <li>
              <span>Bluetooth:</span> {mobile?.bluetooth?.join(" / ")}
            </li>
            <li>
              {" "}
              <span>GPS:</span> {mobile?.gps}
            </li>
            {!mobile?.nfc ? (
              <span>NFC: No data</span>
            ) : (
              <li>
                <span>NFC</span>
                {mobile?.nfc}
              </li>
            )}
            <li>
              <span>Radio: </span>
              {mobile?.radio}
            </li>
            <li>
              <span>USB:</span> {mobile?.usb}
            </li>
            <li>
              <span>Sensors:</span> {mobile?.sensors?.join(" / ")}
            </li>
            <li>
              <span>Battery:</span> {mobile?.battery}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileDetail;
