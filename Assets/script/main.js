//* number animation
(function($) {

  $.fn.digitAnimation = function(value, options = {}) {

    const settings = $.extend({
      duration: 800,
      delayBetweenDigits: 200,
      easing: "ease-out"
    }, options);

    function animateNumberContainers($digits, number) {
        const digits = number.toString().split("");

        $digits.each(function(index) {
            const $digitContainer = $(this);
            const targetDigit = digits[index] ?? 0;

            const $numbers = $digitContainer.find(".number");
            const digitHeight = $numbers.outerHeight();

            let lastIndex = 0;
            $numbers.each(function(i) {
                if (parseInt($(this).text()) === parseInt(targetDigit)) lastIndex = i;
            });

            const translateY = -digitHeight * lastIndex;

            const delay = settings.delayBetweenDigits * index;

            setTimeout(() => {
            $digitContainer.css({
                transition: `transform ${settings.duration}ms ${settings.easing}`,
                transform: `translateY(${translateY}px)`
            });
            }, delay);
        });
    }


    function animateOnView($element, run) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
          }
        });
      });
      observer.observe($element[0]);
    }

    return this.each(function() {
      const $group = $(this);
      const $digits = $group.find(".number-container");

      animateOnView($group, () => {
        animateNumberContainers($digits, value);
      });
    });
  };

})(jQuery);

$("#numbers-animation-1").digitAnimation(100);
$("#numbers-animation-2").digitAnimation(500);

//TODO inserire codice per inserire le immagini dinamicamente