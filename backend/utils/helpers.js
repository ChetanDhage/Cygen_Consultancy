export const formatConsultantProfile = (consultant) => {
  return {
    id: consultant._id,
    fullName: consultant.fullName,
    designation: consultant.designation,
    industry: consultant.industry,
    skills: consultant.skills,
    fee: consultant.fee,
    about: consultant.about,
    avatar: consultant.avatar,
    availability: consultant.availability,
    certifications: consultant.certifications,
    createdAt: consultant.createdAt,
  };
};

export const formatSession = (session) => {
  return {
    id: session._id,
    title: session.title,
    description: session.description,
    startTime: session.startTime,
    endTime: session.endTime,
    status: session.status,
    paymentStatus: session.paymentStatus,
    meetingLink: session.meetingLink,
    client: session.clientId,
  };
};

export const formatQuery = (query) => {
  return {
    id: query._id,
    title: query.title,
    description: query.description,
    status: query.status,
    proposedFee: query.proposedFee,
    duration: query.duration,
    client: query.clientId,
    createdAt: query.createdAt,
  };
};
