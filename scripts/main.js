// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true
    disable: 'mobile' // cards (zoom-in etc.) shouldn't resize/animate on mobile scroll
  }); // initialize animate on scroll library
});

// Special-day popup: shows once per visit when today matches a date in specialDays below.
// Each entry needs month (1-12), day, emoji, title, and message (HTML allowed).
// Fixed-date holidays only - festivals that move with the lunar calendar (Diwali, Holi, Eid, etc.)
// shift every year, so add them as {year, month, day, ...} entries for the specific years you want.
(function() {
  var contactLink = '<a href="#contact" data-dismiss="modal" class="cc-birthday-link">Contact</a> section.';

  var specialDays = [
    { month: 1, day: 1, emoji: '🎆🎉🎆', title: 'Happy New Year!',
      message: 'Wishing you a year full of growth, success, and great opportunities! Thanks for stopping by my resume.' },
    { month: 1, day: 26, emoji: '🇮🇳🎉🇮🇳', title: 'Happy Republic Day!',
      message: 'Celebrating the spirit of India\'s Republic Day. Thanks for stopping by my resume.' },
    { month: 2, day: 1, emoji: '🎉🎂🎉', title: "It's My Birthday!",
      message: 'Today is Saiteja\'s birthday! Thanks for stopping by my resume &mdash; feel free to look around, and if you\'d like to say hi, head over to the ' + contactLink },
    { month: 3, day: 8, emoji: '💜🌸💜', title: "Happy Women's Day!",
      message: 'Celebrating the strength, achievements, and contributions of women everywhere. Thanks for stopping by my resume.' },
    { month: 3, day: 22, emoji: '💧🌍💧', title: 'World Water Day',
      message: 'A reminder to value and protect one of our most vital resources. Thanks for stopping by my resume.' },
    { month: 4, day: 22, emoji: '🌍🌱🌍', title: 'Happy Earth Day!',
      message: 'Celebrating our planet and the importance of protecting it. Thanks for stopping by my resume.' },
    { month: 5, day: 1, emoji: '👷🔧👷', title: "Happy Labour Day!",
      message: 'Honoring the hard work and dedication of workers everywhere. Thanks for stopping by my resume.' },
    { month: 6, day: 5, emoji: '🌱🌎🌱', title: 'World Environment Day',
      message: 'A reminder to protect and cherish our environment. Thanks for stopping by my resume.' },
    { month: 6, day: 21, emoji: '🧘🕉️🧘', title: 'Happy International Yoga Day!',
      message: 'Wishing you balance, health, and mindfulness. Thanks for stopping by my resume.' },
    { month: 7, day: 4, emoji: '🎆🇺🇸🎆', title: 'Happy Independence Day!',
      message: 'Wishing everyone a wonderful 4th of July! Thanks for stopping by my resume.' },
    { month: 8, day: 15, emoji: '🇮🇳🎉🇮🇳', title: 'Happy Independence Day!',
      message: "Celebrating India's Independence Day. Thanks for stopping by my resume." },
    { month: 9, day: 5, emoji: '📚🍎📚', title: "Happy Teacher's Day!",
      message: 'Honoring the teachers and mentors who shape our lives. Thanks for stopping by my resume.' },
    { month: 9, day: 13, emoji: '💻👨‍💻💻', title: "Happy Programmers' Day!",
      message: 'Celebrating the 256th day of the year &mdash; and everyone who turns coffee into code. Thanks for stopping by my resume.' },
    { month: 9, day: 15, emoji: '⚙️🛠️⚙️', title: "Happy Engineer's Day!",
      message: 'Celebrating the engineers who build, innovate, and solve problems every day. Thanks for stopping by my resume.' },
    { month: 10, day: 31, emoji: '🎃👻🎃', title: 'Happy Halloween!',
      message: 'Hope your day is full of treats, not tricks! Thanks for stopping by my resume.' },
    { month: 11, day: 14, emoji: '🎈🧒🎈', title: "Happy Children's Day!",
      message: 'Celebrating the joy, curiosity, and potential of children everywhere. Thanks for stopping by my resume.' },
    { month: 12, day: 25, emoji: '🎄🎅🎄', title: 'Merry Christmas!',
      message: 'Wishing you a joyful holiday season. Thanks for stopping by my resume.' }

    // Example for a lunar-calendar festival pinned to a specific year:
    // { year: 2026, month: 11, day: 8, emoji: '🪔🎉🪔', title: 'Happy Diwali!',
    //   message: 'Wishing you a Diwali full of light and happiness. Thanks for stopping by my resume.' },
  ];

  var today = new Date();
  var todayMonth = today.getMonth() + 1;
  var todayDay = today.getDate();
  var todayYear = today.getFullYear();

  var match = null;
  for (var i = 0; i < specialDays.length; i++) {
    var d = specialDays[i];
    if (d.month === todayMonth && d.day === todayDay && (!d.year || d.year === todayYear)) {
      match = d;
      break;
    }
  }

  if (match) {
    $(document).ready(function() {
      $('#specialDayEmoji').text(match.emoji);
      $('#specialDayTitle').text(match.title);
      $('#specialDayMessage').html(match.message);
      $('#birthdayModal').modal('show');
    });
  }
})();

$('.carousel').carousel({
  interval: 1500
})

// Single toggle button to expand/collapse all accordion items in a section
function bindToggleAll(buttonId, scopeSelector) {
  $(buttonId).on('click', function() {
    var $btn = $(this);
    var expanded = $btn.attr('data-state') === 'expanded';
    if (expanded) {
      $(scopeSelector + ' .collapse').collapse('hide');
      $btn.attr('data-state', 'collapsed').text('Expand All');
    } else {
      $(scopeSelector + ' .collapse').collapse('show');
      $btn.attr('data-state', 'expanded').text('Collapse All');
    }
  });
}

bindToggleAll('#exp-toggle-all', '#experience');
bindToggleAll('#edu-toggle-all', '#education');

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
