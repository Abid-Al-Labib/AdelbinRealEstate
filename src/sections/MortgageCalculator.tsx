import { useEffect } from "react";

const CalculatorSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.mtgcalcs.com/calculators/js/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <iframe
        src="https://www.mtgcalcs.com/calculators/widget.php?selectedCalculators=%7B%22conventional%22%3Atrue%2C%22fha%22%3Atrue%2C%22va%22%3Atrue%2C%22refinance%22%3Atrue%2C%22affordability%22%3Atrue%7D&amp;selectedColors=%7B%22mainBgColor%22%3A%22%23ffffff%22%2C%22resultsBgColor%22%3A%22%23f05c22%22%2C%22sliderPrimaryColor%22%3A%22%23f05c22%22%2C%22sliderSecondaryColor%22%3A%22%23dddddd%22%2C%22sliderHandleColor%22%3A%22%23f05c22%22%2C%22mainTextColor%22%3A%22%23373a3c%22%2C%22resultsTextColor%22%3A%22%23ffffff%22%2C%22titleDefaultColor%22%3A%22%23777777%22%2C%22titleActiveColor%22%3A%22%23333333%22%2C%22titleActiveUnderlineColor%22%3A%22%23ffffff%22%7D"
        frameBorder="0"
        scrolling="no"
        style={{ width: '100%', overflow: 'hidden' }}
        className="h-[1530px] md:h-[734px]"
        title="Mortgage Calculator"
      ></iframe>
    </div>
  );
};

export default CalculatorSection;
