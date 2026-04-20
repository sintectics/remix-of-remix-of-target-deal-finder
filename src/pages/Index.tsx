import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import jet2Logo from "@/assets/jet2holidays-logo.png";

const AFF_LINK = "https://linkthem.net/aff_c?offer_id=2806&aff_id=20617";

const STEPS = [
  'Click on "Start Now"',
  "Enter a few quick details",
  "Complete 4–5 quick deals",
  "Enjoy your £500 Jet2 voucher!",
];

const FAQS = [
  {
    q: "How long do the deals take?",
    a: "Most deals take just a few minutes to complete. The whole process usually takes between 15 and 30 minutes from start to finish.",
  },
  {
    q: "What are deals?",
    a: "Deals are offers from our advertising partners — things like free trials, app downloads, surveys, or signing up for services you may already be interested in.",
  },
  {
    q: "How many deals do I have to do?",
    a: "You'll need to complete 4–5 quick deals to qualify for your reward. The exact number depends on the deals you choose.",
  },
  {
    q: "When will I receive my reward?",
    a: "Once you've completed the required deals, your £500 Jet2 voucher will be sent to the email address you provided, typically within a few business days.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 sm:py-12">
      {/* Main offer card */}
      <div className="w-full max-w-md bg-card rounded-2xl shadow-card overflow-hidden">
        {/* Banner */}
        <div className="bg-banner py-8 px-6 flex items-center justify-center">
          <img
            src={jet2Logo}
            alt="Jet2holidays logo"
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </div>

        {/* Body */}
        <div className="px-6 sm:px-8 py-8">
          <h1 className="text-center text-[2.125rem] sm:text-[2.75rem] font-black text-primary leading-none">
            Up to £500
          </h1>
          <p className="text-center mt-2 text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
            Jet2holidays Voucher
          </p>

          {/* Steps */}
          <ol className="mt-8 space-y-5">
            {STEPS.map((step, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-cta text-primary-foreground font-bold flex items-center justify-center text-sm shadow-sm">
                  {i + 1}
                </span>
                <span className="text-base text-foreground">{step}</span>
              </li>
            ))}
          </ol>

          {/* CTA */}
          <a
            href={AFF_LINK}
            className="mt-8 block w-full text-center bg-gradient-cta text-primary-foreground text-2xl font-bold py-4 rounded-xl shadow-card hover:opacity-95 active:scale-[0.99] transition"
          >
            Start Now
          </a>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Complete 4–5 quick deals to finish the process
          </p>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            3,200+ UK Participants Rewarded
          </p>
        </div>
      </div>

      {/* FAQ card */}
      <div className="w-full max-w-md bg-card rounded-2xl shadow-card mt-8 px-6 sm:px-8 py-6">
        <h2 className="text-xl font-black mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Disclaimer */}
      <p className="max-w-md mt-8 text-center text-[10px] text-muted-foreground leading-relaxed">
        This site is not affiliated with, endorsed by, or sponsored by Jet2holidays or Jet2.com. Jet2holidays® is a registered trademark of its respective owner. Promotion is operated by a third-party advertiser.
      </p>
    </div>
  );
};

export default Index;
