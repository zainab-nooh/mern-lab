import mongoose from 'mongoose';
const { Schema } = mongoose;

const hootSchema = new Schema({
    text: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, {
    timestamps: true
});

const Hoot = mongoose.model('Hoot', hootSchema);

export default Hoot;