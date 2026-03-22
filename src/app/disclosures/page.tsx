"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DisclosuresPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-mango/10 text-mango border border-mango/20 mb-6">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Disclosures
            </h1>
            <p className="text-muted text-lg mb-12">
              Please read the following Risk Disclosure and Terms of Service
              carefully before using Mango.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-16"
          >
            {/* ============ RISK DISCLOSURE ============ */}
            <section>
              <div className="border-b border-border/50 pb-4 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Risk Disclosure
                </h2>
                <p className="text-sm text-muted mt-1">
                  Last Updated: February 1, 2026
                </p>
              </div>

              <div className="prose-custom space-y-8">
                <p className="text-sm text-muted leading-relaxed font-semibold uppercase tracking-wide">
                  Please read this Risk Disclosure carefully before subscribing
                  to the Service.
                </p>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    General Investment Risk
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Trading and investing in securities, options, futures, and
                    other financial instruments involves substantial risk of
                    loss. You may lose some or all of your invested capital. Only
                    invest funds you can afford to lose entirely without
                    affecting your financial security or lifestyle.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Options Trading Risk
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    Options trading is particularly risky and is not suitable for
                    all investors. You should be aware that:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                    <li>
                      Options can expire worthless. If an option expires out of
                      the money, you lose 100% of the premium paid.
                    </li>
                    <li>
                      Options are leveraged instruments that can result in losses
                      exceeding your initial investment in certain strategies.
                    </li>
                    <li>
                      The time decay (theta) of options erodes value daily,
                      particularly as expiration approaches.
                    </li>
                    <li>
                      Options pricing is complex and affected by multiple factors
                      including volatility, time, and underlying price movement.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    0DTE (Zero Days to Expiration) Trading Risk
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    0DTE options trading carries extreme risk. If you trade 0DTE
                    options, you acknowledge that:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                    <li>
                      Rapid, total loss is common. 0DTE options can lose 100% of
                      their value in minutes or hours.
                    </li>
                    <li>
                      Price movements against your position can result in
                      immediate and complete loss of premium.
                    </li>
                    <li>
                      Volatility during the trading day can cause wild price
                      swings in either direction.
                    </li>
                    <li>
                      Liquidity may be limited, resulting in wide bid-ask spreads
                      and difficulty exiting positions.
                    </li>
                    <li>
                      Slippage can significantly impact entry and exit prices,
                      especially during volatile market conditions.
                    </li>
                    <li>
                      Timing is critical and even small delays can result in
                      substantially different outcomes.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Analyst Trade Ideas Risk
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    The Service may include trade ideas shared by human analysts.
                    By using analyst content, you acknowledge that:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                    <li>
                      Analyst opinions may be wrong. There is no guarantee of
                      accuracy or profitability.
                    </li>
                    <li>
                      Analysts are expressing their own personal opinions, not
                      providing personalized advice.
                    </li>
                    <li>
                      Analysts are not licensed investment advisors or
                      fiduciaries.
                    </li>
                    <li>
                      Analysts may have positions in securities they discuss,
                      creating potential conflicts of interest.
                    </li>
                    <li>
                      Analyst track records and past performance do not guarantee
                      future results.
                    </li>
                    <li>
                      Different analysts may have conflicting opinions on the
                      same trade.
                    </li>
                    <li>
                      You should never rely solely on analyst opinions for
                      trading decisions.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    No Personalized Advice
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    The Service provides general educational content and market
                    commentary only. We do not provide:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                    <li>
                      Personalized investment advice tailored to your financial
                      situation
                    </li>
                    <li>
                      Suitability analysis for any trade or investment
                    </li>
                    <li>
                      Monitoring of your individual positions or portfolio
                    </li>
                    <li>
                      Any duty to update, correct, or follow up on signals
                      provided
                    </li>
                    <li>
                      Recommendations based on your personal risk tolerance,
                      investment objectives, or financial circumstances
                    </li>
                  </ul>
                  <p className="text-sm text-muted leading-relaxed mt-3">
                    You are solely responsible for evaluating the suitability of
                    any trade for your personal situation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Market Risk</h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    Financial markets are inherently unpredictable. You should be
                    aware that:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                    <li>
                      Markets can move against your position suddenly and without
                      warning.
                    </li>
                    <li>
                      Economic events, news, and unexpected developments can
                      cause rapid price changes.
                    </li>
                    <li>
                      Market conditions can change, making previously successful
                      strategies unprofitable.
                    </li>
                    <li>
                      Liquidity conditions vary and may affect your ability to
                      enter or exit positions.
                    </li>
                    <li>
                      Circuit breakers, trading halts, and other market
                      mechanisms may prevent trades.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Volatility Risk
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    Volatility significantly impacts options trading. You should
                    understand that:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                    <li>
                      Implied volatility changes can cause options prices to move
                      independent of the underlying asset.
                    </li>
                    <li>
                      Volatility crush after events (earnings, FOMC, etc.) can
                      rapidly reduce option values.
                    </li>
                    <li>
                      High volatility environments increase both potential gains
                      and potential losses.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Execution Risk
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    Trade execution involves risks including:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                    <li>
                      Slippage between quoted prices and execution prices
                    </li>
                    <li>
                      Delays in order execution due to system or broker issues
                    </li>
                    <li>
                      Platform outages or technical failures at critical moments
                    </li>
                    <li>
                      Differences between paper trading results and live trading
                      results
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Your Responsibility
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    All trading decisions are your sole responsibility. You
                    should:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                    <li>
                      Conduct your own research and due diligence before any
                      trade
                    </li>
                    <li>
                      Consult with a qualified financial advisor if you need
                      personalized advice
                    </li>
                    <li>
                      Only trade with capital you can afford to lose completely
                    </li>
                    <li>
                      Understand the products you are trading before risking
                      capital
                    </li>
                    <li>
                      Have a trading plan and risk management strategy
                    </li>
                    <li>
                      Never trade based solely on any signal or recommendation
                      from the Service
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">No Guarantees</h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    Mango Trading Group LLC makes no representations or
                    guarantees regarding:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                    <li>
                      The accuracy, completeness, or timeliness of any
                      information provided
                    </li>
                    <li>
                      The profitability or success of any trading strategy or
                      signal
                    </li>
                    <li>Future market conditions or price movements</li>
                    <li>
                      The performance of any trade idea or signal
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Acknowledgment
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    By subscribing to the Service, you acknowledge that you have
                    read, understood, and agree to this Risk Disclosure. You
                    acknowledge that trading involves substantial risk and that
                    you may lose some or all of your invested capital.
                  </p>
                </div>

                <div className="bg-surface/50 border border-border/50 rounded-xl p-5">
                  <h4 className="text-sm font-semibold mb-1">Contact</h4>
                  <p className="text-sm text-muted">
                    For questions about this Risk Disclosure, contact:
                  </p>
                  <p className="text-sm text-muted mt-2">
                    Mango Trading Group LLC
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:MangoTradingGroupLLC@gmail.com"
                      className="text-mango hover:text-mango-light transition-colors"
                    >
                      MangoTradingGroupLLC@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* ============ TERMS OF SERVICE ============ */}
            <section>
              <div className="border-b border-border/50 pb-4 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Terms of Service
                </h2>
                <p className="text-sm text-muted mt-1">
                  Last Updated: February 6, 2026
                </p>
              </div>

              <div className="prose-custom space-y-8">
                <p className="text-sm text-muted leading-relaxed">
                  These Terms of Service (&quot;Terms&quot;) govern your access
                  to and use of the services provided by Mango Trading Group LLC
                  (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;), including our Discord community, website, and
                  all related services (collectively, the
                  &quot;Service&quot;). By subscribing to or using the Service,
                  you agree to be bound by these Terms.
                </p>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    1. Description of Service
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    The Service is a subscription-based educational and
                    informational service providing:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                    <li>General market commentary</li>
                    <li>
                      Analyst trade ideas shared by community members
                    </li>
                    <li>Community discussion via Discord</li>
                    <li>Educational content related to options trading</li>
                  </ul>
                  <p className="text-sm text-muted leading-relaxed mt-3">
                    The Service does not provide personalized investment advice.
                    All content is for educational and informational purposes
                    only. You should not interpret any information provided
                    through the Service as personalized financial, investment, or
                    trading advice. The Service provides data analysis and
                    educational observations only. We do not provide trade
                    execution instructions, timing directives, or
                    recommendations to buy or sell any specific security.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    2. Analyst-Provided Content Disclaimers
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    The Service may include trade ideas, market opinions, and
                    analysis shared by human analysts. By using the Service, you
                    acknowledge and agree that:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                    <li>
                      Analyst opinions are their own personal views and not
                      personalized investment advice
                    </li>
                    <li>
                      Analysts are not licensed investment advisors, brokers, or
                      fiduciaries
                    </li>
                    <li>
                      Analyst trade ideas may be speculative, incorrect, or
                      unsuitable for your situation
                    </li>
                    <li>
                      There is no guarantee of accuracy or profitability of
                      analyst content
                    </li>
                    <li>
                      Analysts may have positions in securities they discuss
                      (potential conflicts of interest)
                    </li>
                    <li>
                      Past performance of analyst ideas does not guarantee future
                      results
                    </li>
                    <li>
                      You should never rely solely on analyst opinions for
                      trading decisions
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    3. No Duty to Update
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    We have no obligation to update, correct, modify, or retract
                    any content, analysis, or signal provided through the
                    Service, even if market conditions change, earlier
                    information is proven incorrect, or an analyst changes their
                    position. Content is provided as a snapshot in time and may
                    become outdated immediately.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    4. Risk Acknowledgment
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    Trading securities, options, and derivatives involves
                    substantial risk of loss. By using the Service, you
                    acknowledge that you have read, understood, and agree to the
                    Risk Disclosure, which is incorporated into these Terms by
                    reference.
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    You expressly acknowledge that:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside mt-3">
                    <li>
                      Options trading, particularly 0DTE (zero days to
                      expiration) options, carries extreme risk
                    </li>
                    <li>You may lose your entire investment rapidly</li>
                    <li>
                      The Service does not guarantee any particular trading
                      outcomes
                    </li>
                    <li>
                      All trading decisions are your sole responsibility
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    5. Subscription, Billing, and Auto-Renewal
                  </h3>

                  <h4 className="text-sm font-semibold mb-2 mt-4">
                    5.1 Subscription Terms
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    The Service is offered on a monthly subscription basis at
                    $50.00 per month, or as a one-time lifetime access purchase
                    at $999.00.
                  </p>

                  <h4 className="text-sm font-semibold mb-2 mt-4">
                    5.2 Auto-Renewal
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Monthly subscriptions will automatically renew each month
                    until canceled. You will be charged the then-current
                    subscription fee on each monthly anniversary of your initial
                    subscription date. You authorize us to charge your payment
                    method on file for all recurring subscription fees.
                  </p>

                  <h4 className="text-sm font-semibold mb-2 mt-4">
                    5.3 Billing
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    All payments are processed through Stripe. You are
                    responsible for providing accurate, current, and complete
                    payment information. If payment cannot be processed, your
                    access may be suspended or terminated.
                  </p>

                  <h4 className="text-sm font-semibold mb-2 mt-4">
                    5.4 Cancellation
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    You may cancel your subscription at any time through your
                    account dashboard or by contacting us at
                    MangoTradingGroupLLC@gmail.com. Cancellation will take effect
                    at the end of your current billing period.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    6. Refund Policy
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Due to the digital nature of this service, all sales are
                    final once access is granted. No partial refunds for unused
                    subscription time. No refunds due to dissatisfaction, market
                    losses, trading outcomes, or inactivity. No refunds for
                    failure to use the Service.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    7. Access and Account
                  </h3>

                  <h4 className="text-sm font-semibold mb-2 mt-4">
                    7.1 Discord Access
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Upon successful payment, you will receive access to our
                    private Discord community. You are responsible for
                    maintaining the security of your Discord account.
                  </p>

                  <h4 className="text-sm font-semibold mb-2 mt-4">
                    7.2 Account Sharing
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Your subscription is personal and non-transferable. Sharing
                    your account access or redistributing Service content is
                    prohibited and may result in immediate termination without
                    refund.
                  </p>

                  <h4 className="text-sm font-semibold mb-2 mt-4">
                    7.3 Jurisdictional Compliance
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    You are solely responsible for ensuring that your access to
                    and use of the Service complies with all applicable laws,
                    regulations, and rules in your jurisdiction. The Service is
                    not intended for distribution to, or use by, any person in
                    any country or jurisdiction where such distribution or use
                    would be contrary to local law or regulation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    8. Access Revocation and Moderation
                  </h3>

                  <h4 className="text-sm font-semibold mb-2 mt-4">
                    8.1 Our Rights
                  </h4>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    We reserve the right, at our sole discretion, to:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                    <li>
                      Remove, suspend, or ban any user from the Service
                    </li>
                    <li>Enforce community rules and guidelines</li>
                    <li>Moderate, edit, or delete any content</li>
                    <li>
                      Terminate access without refund for violations of these
                      Terms
                    </li>
                    <li>
                      Modify or discontinue the Service at any time
                    </li>
                  </ul>

                  <h4 className="text-sm font-semibold mb-2 mt-4">
                    8.2 User Content
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    We are not responsible for statements, opinions, or content
                    posted by other users in the community. Community content
                    does not represent our views or endorsement. You interact
                    with other users at your own risk.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    9. Platform Dependency Disclaimer
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    The Service relies on third-party platforms including Discord
                    and Stripe. You acknowledge and agree that:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                    <li>
                      Discord outages, service interruptions, policy changes, or
                      account actions are outside our control
                    </li>
                    <li>
                      Stripe payment processing issues are outside our control
                    </li>
                    <li>
                      Loss of access due to third-party platform actions is not
                      refundable
                    </li>
                    <li>
                      We are not affiliated with, endorsed by, or partnered with
                      Discord Inc. or Stripe Inc.
                    </li>
                    <li>
                      Changes to third-party platform terms or availability may
                      affect the Service
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    10. Limitation of Liability
                  </h3>

                  <h4 className="text-sm font-semibold mb-2 mt-4">
                    10.1 Liability Cap
                  </h4>
                  <p className="text-sm text-muted leading-relaxed uppercase">
                    To the maximum extent permitted by law, our total liability
                    to you for any claims arising from or related to the Service
                    shall not exceed the amount you paid to us in the thirty (30)
                    days immediately preceding the claim.
                  </p>

                  <h4 className="text-sm font-semibold mb-2 mt-4">
                    10.2 Exclusion of Damages
                  </h4>
                  <p className="text-sm text-muted leading-relaxed mb-3 uppercase">
                    We shall not be liable for any:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                    <li>Trading losses or investment losses of any kind</li>
                    <li>
                      Missed trading opportunities or market movements
                    </li>
                    <li>
                      Indirect, incidental, special, consequential, or punitive
                      damages
                    </li>
                    <li>
                      Loss of profits, revenue, data, or business opportunities
                    </li>
                    <li>Emotional distress or mental anguish</li>
                    <li>
                      Damages arising from reliance on analyst opinions or trade
                      ideas
                    </li>
                    <li>
                      Damages resulting from third-party platform issues
                    </li>
                  </ul>

                  <h4 className="text-sm font-semibold mb-2 mt-4">
                    10.3 Acknowledgment
                  </h4>
                  <p className="text-sm text-muted leading-relaxed uppercase">
                    You acknowledge that the limitations in this section are
                    essential to this agreement and that we would not offer the
                    Service without these limitations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    11. Disclaimer of Warranties
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3 uppercase">
                    The Service is provided &quot;as is&quot; and &quot;as
                    available&quot; without warranties of any kind, express or
                    implied. We disclaim all warranties including, but not
                    limited to:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                    <li>
                      Merchantability and fitness for a particular purpose
                    </li>
                    <li>
                      Accuracy, reliability, or completeness of any content
                    </li>
                    <li>Uninterrupted or error-free service</li>
                    <li>Any results or outcomes from using the Service</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    12. Binding Arbitration and Class Action Waiver
                  </h3>

                  <h4 className="text-sm font-semibold mb-2 mt-4">
                    12.1 Agreement to Arbitrate
                  </h4>
                  <p className="text-sm text-muted leading-relaxed uppercase">
                    You and the Company agree that any dispute, claim, or
                    controversy arising out of or relating to these Terms or the
                    Service shall be resolved by binding individual arbitration,
                    rather than in court, except that either party may seek
                    equitable relief in court for infringement of intellectual
                    property rights.
                  </p>

                  <h4 className="text-sm font-semibold mb-2 mt-4">
                    12.2 Class Action Waiver
                  </h4>
                  <p className="text-sm text-muted leading-relaxed uppercase">
                    You waive any right to participate in a class action lawsuit
                    or class-wide arbitration. All claims must be brought in the
                    parties&apos; individual capacity, not as a plaintiff or
                    class member in any purported class, collective, or
                    representative proceeding.
                  </p>

                  <h4 className="text-sm font-semibold mb-2 mt-4">
                    12.3 Arbitration Procedure
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Arbitration shall be conducted by the American Arbitration
                    Association (AAA) under its Consumer Arbitration Rules. The
                    arbitration shall take place in Loudoun County, Virginia, or
                    at another mutually agreed location. The arbitrator&apos;s
                    decision shall be final and binding.
                  </p>

                  <h4 className="text-sm font-semibold mb-2 mt-4">
                    12.4 Small Claims Exception
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Either party may bring an individual action in small claims
                    court if the claim qualifies.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    13. Governing Law and Venue
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    These Terms shall be governed by and construed in accordance
                    with the laws of the Commonwealth of Virginia, without regard
                    to conflict of law principles. Any legal action not subject
                    to arbitration shall be brought exclusively in the state or
                    federal courts located in Loudoun County, Virginia.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    14. Indemnification
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    You agree to indemnify, defend, and hold harmless Mango
                    Trading Group LLC, its officers, directors, employees, and
                    agents from any claims, damages, losses, liabilities, and
                    expenses (including attorneys&apos; fees) arising from:
                  </p>
                  <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                    <li>Your use of the Service</li>
                    <li>Your violation of these Terms</li>
                    <li>Your trading activities or decisions</li>
                    <li>Your violation of any third-party rights</li>
                    <li>
                      Any regulatory inquiry, investigation, or enforcement
                      action triggered by your activities or use of the Service
                    </li>
                    <li>
                      Any claims arising from your redistribution, sharing, or
                      public display of Service content
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    15. Modifications to Terms
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    We may modify these Terms at any time. Material changes will
                    be communicated via email or through the Service. Your
                    continued use of the Service after changes become effective
                    constitutes acceptance of the modified Terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    16. Severability
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    If any provision of these Terms is found to be
                    unenforceable, the remaining provisions shall continue in
                    full force and effect.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    17. Entire Agreement
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    These Terms, together with the Risk Disclosure, Privacy
                    Policy, and Refund Policy, constitute the entire agreement
                    between you and us regarding the Service.
                  </p>
                </div>

                <div className="bg-surface/50 border border-border/50 rounded-xl p-5">
                  <h4 className="text-sm font-semibold mb-1">
                    18. Contact Information
                  </h4>
                  <p className="text-sm text-muted">
                    For questions about these Terms, please contact us at:
                  </p>
                  <p className="text-sm text-muted mt-2">
                    Mango Trading Group LLC
                    <br />
                    Virginia
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:MangoTradingGroupLLC@gmail.com"
                      className="text-mango hover:text-mango-light transition-colors"
                    >
                      MangoTradingGroupLLC@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
