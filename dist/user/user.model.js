"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
const user_interface_1 = require("./user.interface");
class UserModel extends defaultClasses_1.TimeStamps {
}
__decorate([
    (0, typegoose_1.prop)({ unique: true }),
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Boolean)
], UserModel.prototype, "isVerified", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "birthDate", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "city", void 0);
__decorate([
    (0, typegoose_1.prop)({ enum: user_interface_1.EnumGender }),
    __metadata("design:type", String)
], UserModel.prototype, "gender", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "avatarPath", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: [], ref: () => UserModel }),
    __metadata("design:type", Array)
], UserModel.prototype, "friends", void 0);
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map