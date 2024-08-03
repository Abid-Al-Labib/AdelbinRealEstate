import React, { useEffect } from 'react';

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
    <section className="xl:padding-l wide:padding-r">
        <div className="mcalculator" data-calc="https://www.mtgcalcs.com/calculators/widget.php?selectedCalculators=%7B%22conventional%22%3Atrue%2C%22fha%22%3Atrue%2C%22va%22%3Atrue%2C%22refinance%22%3Atrue%2C%22affordability%22%3Atrue%7D&selectedColors=%7B%22mainBgColor%22%3A%22%23ffffff%22%2C%22resultsBgColor%22%3A%22%23f05c22%22%2C%22sliderPrimaryColor%22%3A%22%23f05c22%22%2C%22sliderSecondaryColor%22%3A%22%23dddddd%22%2C%22sliderHandleColor%22%3A%22%23f05c22%22%2C%22mainTextColor%22%3A%22%23373a3c%22%2C%22resultsTextColor%22%3A%22%23ffffff%22%2C%22titleDefaultColor%22%3A%22%23777777%22%2C%22titleActiveColor%22%3A%22%23333333%22%2C%22titleActiveUnderlineColor%22%3A%22%23ffffff%22%7D&fhaInputs=%7B%22mcalc-fha-purchase-price%22%3A%22250000%22%2C%22mcalc-fha-down-payment-percent%22%3A%225%22%2C%22mcalc-fha-interest-rate%22%3A%225%22%2C%22mcalc-fha-loan-term%22%3A%2230%22%2C%22mcalc-fha-annual-tax-percent%22%3A%220%22%2C%22mcalc-fha-annual-insurance%22%3A%220%22%2C%22mcalc-fha-monthly-hoa%22%3A%220%22%7D&conventionalInputs=%7B%22mcalc-conventional-purchase-price%22%3A%22250000%22%2C%22mcalc-conventional-down-payment-percent%22%3A%225%22%2C%22mcalc-conventional-interest-rate%22%3A%225%22%2C%22mcalc-conventional-loan-term%22%3A%2230%22%2C%22mcalc-conventional-annual-tax-percent%22%3A%220%22%2C%22mcalc-conventional-annual-insurance%22%3A%220%22%2C%22mcalc-conventional-mortgage-insurance-rate%22%3A%220%22%2C%22mcalc-conventional-monthly-hoa%22%3A%220%22%7D&vaInputs=%7B%22mcalc-va-first-time-va-loan%22%3A%22true%22%2C%22mcalc-va-type-of-service%22%3A%22regular_military%22%2C%22mcalc-va-purchase-price%22%3A%22250000%22%2C%22mcalc-va-down-payment-percent%22%3A%225%22%2C%22mcalc-va-interest-rate%22%3A%225%22%2C%22mcalc-va-loan-term%22%3A%2230%22%2C%22mcalc-va-annual-tax-percent%22%3A%220%22%2C%22mcalc-va-annual-insurance%22%3A%220%22%2C%22mcalc-va-monthly-hoa%22%3A%220%22%7D&refinanceInputs=%7B%22mcalc-refi-current-loan-amount%22%3A%22300000%22%2C%22mcalc-refi-current-interest-rate%22%3A%225%22%2C%22mcalc-refi-current-loan-term%22%3A%22360%22%2C%22mcalc-refi-origination-year%22%3A%222015%22%2C%22mcalc-refi-new-loan-amount%22%3A%22250000%22%2C%22mcalc-refi-new-interest-rate%22%3A%224%22%2C%22mcalc-refi-new-loan-term%22%3A%22360%22%2C%22mcalc-refi-refinance-fees%22%3A%220%22%7D&affordabilityInputs=%7B%22mcalc-affordability-annual-income%22%3A%22100000%22%2C%22mcalc-affordability-monthly-debt%22%3A%222000%22%2C%22mcalc-affordability-annual-property-tax%22%3A%221500%22%2C%22mcalc-affordability-annual-home-insurance%22%3A%221000%22%2C%22mcalc-affordability-down-payment%22%3A%2210000%22%2C%22mcalc-affordability-interest-rate%22%3A%224%22%2C%22mcalc-affordability-loan-term%22%3A%2230%22%7D" data-width="1100"></div>
    </section>
  );
};

export default CalculatorSection;
