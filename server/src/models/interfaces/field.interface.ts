import mongoose from "mongoose";

export default interface field {
    name: string, 
    companyId: mongoose.Types.ObjectId
}

// only 1, const id name: development