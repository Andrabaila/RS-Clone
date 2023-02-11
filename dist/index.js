"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = __importDefault(require("./routes/routes"));
var app = (0, express_1["default"])();
var port = 3333;
app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({
    extended: true
}));
(0, routes_1["default"])(app);
app.listen(port, function () { return console.log("Server run on port ".concat(port, "!")); });
