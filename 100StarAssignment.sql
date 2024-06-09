SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for EMPLOYEE
-- ----------------------------
DROP TABLE IF EXISTS `EMPLOYEE`;
CREATE TABLE `EMPLOYEE`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `uuid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `gender` int NULL DEFAULT NULL,
  `birth_day` date NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `sub_district` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `district` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `province` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `expired_id_card` date NULL DEFAULT NULL,
  `created_date` datetime NULL DEFAULT NULL,
  `updated_date` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `EMPLOYEE_UUID`(`uuid` ASC) USING BTREE,
  UNIQUE INDEX `EMPLOYEE_ID`(`id` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 67 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of EMPLOYEE
-- ----------------------------
INSERT INTO `EMPLOYEE` VALUES (1, '76a9fce0-64ed-4c13-8828-14fb6b53adc5', 'นนทพัทธ์', 'ฤกษ์ฤทธิชัย', 2, '2000-05-26', '320/1 หมู่ 4', 'ปากแรต', 'บ้านโป่ง', 'ราชบุรี', '2025-05-26', '2024-06-08 09:29:27', '2024-06-08 14:58:24');
INSERT INTO `EMPLOYEE` VALUES (3, 'bc2354e0-2e6f-415c-9385-a77e1132b32b', 'สมชาย', 'วงศ์ดี', 1, '1995-11-12', '123/45 หมู่ 7', 'บางกะปิ', 'บางกะปิ', 'กรุงเทพมหานคร', '2027-11-12', '2024-06-08 11:29:13', '2024-06-08 11:29:13');
INSERT INTO `EMPLOYEE` VALUES (4, 'e8c83972-3300-4160-b0f3-e1ef8d93b94c', 'มาลี', 'สวยมาก', 2, '1988-03-20', '789/12 หมู่ 3', 'หาดใหญ่', 'หาดใหญ่', 'สงขลา', '2026-03-20', '2024-06-08 11:29:20', '2024-06-08 11:29:20');
INSERT INTO `EMPLOYEE` VALUES (5, '816b56db-b11a-40e3-8129-c3535b54d2a1', 'ปรีชา', 'นคร', 1, '1992-07-05', '456 ถนนสุขุมวิท', 'คลองเตย', 'คลองเตย', 'กรุงเทพมหานคร', '2028-07-05', '2024-06-08 11:29:25', '2024-06-08 11:29:25');
INSERT INTO `EMPLOYEE` VALUES (6, '69c09179-8440-4416-bb0e-00aab5012675', 'ราตรี', 'ชายสอง', 2, '1998-01-30', '234/5 หมู่ 2', 'เมืองเชียงใหม่', 'เมืองเชียงใหม่', 'เชียงใหม่', '2030-01-30', '2024-06-08 11:29:31', '2024-06-08 11:29:31');
INSERT INTO `EMPLOYEE` VALUES (7, '5c555817-4d71-4f5c-9db6-33ee560f5a1d', 'อนงค์', 'หนังผี', 3, '1990-09-18', '567/8 หมู่ 6', 'ปากเกร็ด', 'ปากเกร็ด', 'นนทบุรี', '2024-09-18', '2024-06-08 11:29:37', '2024-06-08 11:29:37');
INSERT INTO `EMPLOYEE` VALUES (8, '615fecb3-7b85-4493-8019-370520b93e4e', 'บุญเลิศ', 'มงคล', 1, '1985-12-03', '890/1 หมู่ 9', 'เมืองขอนแก่น', 'เมืองขอนแก่น', 'ขอนแก่น', '2025-12-03', '2024-06-08 11:29:42', '2024-06-08 11:29:42');
INSERT INTO `EMPLOYEE` VALUES (9, '2e4119eb-7cbd-490f-92fe-d6144131239b', 'สิริรัตน์', 'สวยเลิศ', 2, '1993-06-15', '678/9 หมู่ 5', 'หัวหิน', 'หัวหิน', 'ประจวบคีรีขันธ์', '2029-06-15', '2024-06-08 11:29:47', '2024-06-08 11:29:47');

SET FOREIGN_KEY_CHECKS = 1;
