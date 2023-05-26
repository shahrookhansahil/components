import React from "react";
const SubjectContext = React.createContext();
const SubjectProvider = SubjectContext.Provider;
const SubjectConsumer = SubjectContext.Consumer;
export {SubjectProvider, SubjectConsumer};