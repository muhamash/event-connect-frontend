"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is this platform about?",
    answer:
      "This platform allows users to create, host, and participate in events. Hosts can manage events while participants can join and review them.",
  },
  {
    question: "How do I become a host?",
    answer:
      "You can request host access from your profile. Once approved by an admin, you will be able to create and manage events.",
  },
  {
    question: "How are event ratings calculated?",
    answer:
      "Ratings are calculated based on participant reviews submitted after an event is completed.",
  },
  {
    question: "Can I cancel an event?",
    answer:
      "Yes. Hosts can cancel events before they start. Admins can cancel events at any time if policy violations occur.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use secure authentication, role-based access control, and audit logs to protect user data.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen  py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 mb-4">
            <HelpCircle className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 mt-3">
            Find answers to the most common questions about the platform
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-800 transition-colors"
                >
                  <span className="text-lg font-medium text-amber-400">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-gray-300 leading-relaxed border-t border-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          Still have questions? Contact support or reach out to an admin.
        </div>
      </div>
    </div>
  );
}
