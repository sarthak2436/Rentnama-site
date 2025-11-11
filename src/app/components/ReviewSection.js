export default function ReviewsSection() {
  const reviews = [
    {
      text: "It literally solved all my problems.",
      name: "Hanna",
      role: "Client Review",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      text: "Loved it!",
      name: "Marco",
      role: "Client Review",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      text: "Much needed! ❤️",
      name: "Nora",
      role: "Client Review",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      text: "It blew my mind.",
      name: "Leo",
      role: "Client Review",
      avatar: "https://i.pravatar.cc/40?img=4",
    },
  ];

  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Reviews</h2>
      <div className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="min-w-[280px] max-w-sm flex-shrink-0 bg-white border rounded-2xl p-6 shadow-md snap-start"
          >
            <p className="text-gray-700 text-lg italic mb-6">“{review.text}”</p>
            <div className="flex items-center space-x-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
