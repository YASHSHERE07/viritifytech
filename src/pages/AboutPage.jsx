import React from "react";

// Define team members' data
const teamMembers = [
  {
    name: "James Edward",
    role: "Editor",
    articles: 13,

    followers: "2.5k",
    imageUrl:
      "https://img.freepik.com/premium-photo/3d-cartoon-style-character-albert-einstein-created-with-generative-ai_1002229-1575.jpg",
  },
  {
    name: "Maria Garcia",
    role: "Designer",
    articles: 8,

    followers: "3.2k",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:4224/1*CMldfhqf8MH7Qewgh7Ws5A.jpeg",
  },
  {
    name: "Liam Smith",
    role: "Manager",
    articles: 20,

    followers: "4k",
    imageUrl:
      "https://mir-s3-cdn-cf.behance.net/projects/404/7bbfe3190199049.Y3JvcCwxMTQ1LDg5NSw5OSww.jpg",
  },
];

const AboutPage = () => {
  return (
    <div>
      {/* Hero Image */}
      <div
        className="bg-cover bg-center h-96"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aXN0aWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')",
        }}
      >
        <div className="flex h-full w-full bg-gray-900 bg-opacity-50 justify-center items-center">
          <div className="text-center">
            <h1 className="text-white text-4xl font-bold">About Us</h1>
            <p className="text-white text-xl mt-4">
              Meet the team that makes it all happen.
            </p>
          </div>
        </div>
      </div>

      {/* Profile Cards */}
      <div className="my-10 grid gap-4 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="mx-auto flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left"
          >
            <div className="mb-4 md:mr-6 md:mb-0">
              <img
                className="h-56 rounded-lg object-cover md:w-56"
                src={member.imageUrl}
                alt={member.name}
              />
            </div>
            <div>
              <p className="text-xl font-medium text-gray-700">{member.name}</p>
              <p className="mb-4 text-sm font-medium text-gray-500">
                {member.role}
              </p>
              <div className="flex space-x-2">
                <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                  <p className="text-sm font-medium text-gray-500">Articles</p>
                  <p className="text-3xl font-medium text-gray-600">
                    {member.articles}
                  </p>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2"></div>
                <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                  <p className="text-sm font-medium text-gray-500">Followers</p>
                  <p className="text-3xl font-medium text-gray-600">
                    {member.followers}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 mt-4">
                <button className="w-full rounded-lg border-2 bg-white px-4 py-2 font-medium text-gray-500">
                  Message
                </button>
                <button className="w-full rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white">
                  Follow
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
