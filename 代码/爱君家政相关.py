



# import pandas as pd
# import json
# import os
#
# # 文件路径
# input_file = r"C:\Users\Admin\Desktop\爱君家政阿姨资料.xlsx"
#
# # 读取 Excel 文件
# df = pd.read_excel(input_file)
#
# # 重命名列（确保字段统一，可根据实际列名修改）
# df.columns = [
#     "name", "gender", "id_card", "birth_year", "current_age", "record_age",
#     "address", "type", "phone1", "phone2", "comment", "year_recorded"
# ]
#
# # 转换为结构化字典列表
# records = df.to_dict(orient="records")
#
# # 写入 JSON 文件
# json_output_path = os.path.join(os.path.dirname(input_file), "阿姨资料_接送结构.json")
# with open(json_output_path, "w", encoding="utf-8") as f:
#     json.dump(records, f, ensure_ascii=False, indent=2)
#
# # 可选：写入整理后的 Excel 文件
# excel_output_path = os.path.join(os.path.dirname(input_file), "阿姨资料_整理输出.xlsx")
# df.to_excel(excel_output_path, index=False)
#
# print(f"✅ JSON文件保存成功: {json_output_path}")
# print(f"✅ Excel文件保存成功: {excel_output_path}")










#
# import json
# import math
#
# # JSON 文件路径
# file_path = r"C:\Users\Admin\Desktop\阿姨资料_接送结构.json"
#
# # 读取 JSON 文件
# with open(file_path, "r", encoding="utf-8") as f:
#     data = json.load(f)
#
# def extract_comment(comment_str):
#     if not isinstance(comment_str, str):
#         t = ""
#     else:
#         t = comment_str.lower()
#     result = {}
#
#     if "靓" in t:
#         result['talentcommenet'] = "靓"
#     elif "人一般" in t:
#         result['talentcommenet'] = "人一般"
#     elif "此人不行" in t:
#         result['talentcommenet'] = "此人不行"
#     else:
#         result['talentcommenet'] = "未知"
#
#
#     if "上班" in t:
#         result['work_start'] = "已上班"
#     elif "不做了" in t:
#         result['work_start'] = "不做了"
#     elif "电话已失效、失联" in t:
#         result['work_start'] = "电话已失效"
#     else:
#         result['work_start'] = "空闲中"
#
#     result.setdefault('certificate_type', [])
#     if "月嫂证" in t and "月嫂证" not in result['certificate_type']:
#         result['certificate_type'].append("月嫂证")
#
#     if "育婴证" in t and "育婴证" not in result['certificate_type']:
#         result['certificate_type'].append("育婴证")
#
#     if "母婴证" in t and "母婴证" not in result['certificate_type']:
#         result['certificate_type'].append("母婴证")
#
#     if "护理师证" in t and "护理师证" not in result['certificate_type']:
#         result['certificate_type'].append("护理师证")
#
#     if "护工证" in t and "护工证" not in result['certificate_type']:
#         result['certificate_type'].append("护工证")
#
#     if "催乳证" in t and "催乳证" not in result['certificate_type']:
#         result['certificate_type'].append("催乳证")
#
#     if "早教证" in t and "早教证" not in result['certificate_type']:
#         result['certificate_type'].append("早教证")
#
#     if "健康证" in t and "健康证" not in result['certificate_type']:
#         result['certificate_type'].append("健康证")
#
#     return result
#
# def extract_types(type_str):
#     if not isinstance(type_str, str):
#         text = ""
#     else:
#         text = type_str.lower()
#
#     result = {}
#     final_str = ""  # 用于拼接的变量
#
#
#     retlist = text.split('、')
#     for t in retlist:
#
#         result.setdefault('clean_type', [])
#         if "卫生" in t:
#
#             if ("熟练搞卫生" in t) or ("搞卫生(熟练)" in t) or ("搞卫生(熟练工)" in t):
#                 result['clean_type'].append("搞卫生(熟练)")
#             elif "专业搞卫生" in t:
#                 result['clean_type'].append("搞卫生(专业)")
#             else:
#                 if "搞卫生(一般)" not in result['clean_type']:
#                     result['clean_type'].append("搞卫生(一般)")
#
#             if "新房卫生" in t:
#                 result['clean_type'].append("搞卫生(新房开荒)")
#
#             if "小区卫生" in t:
#                 result['clean_type'].append("搞卫生(小区卫生)")
#
#             t = ''
#
#         result.setdefault('cook_type', [])
#         if ("不煮饭" in t)or ("不会煮饭"in t):
#             pass
#         elif ("煮饭" in t) or ("煮食" in t) or ("老人食" in t) or ("家庭工" in t) or ("没做家庭工" in t) or ("没做过家庭工" in t) or ("大锅饭" in t) or ("煮饭(非家庭的)" in t) or ("工厂饭" in t) or ("单位煮饭" in t) or ("煮饭(工厂)" in t):
#             if ("熟练煮饭" in t) or ("煮饭(熟练)" in t) or ("煮饭（喜欢）" in t) or ("煮饭(喜欢)" in t) or ("煮饭(熟练工)" in t):
#                 result['cook_type'].append("煮饭(熟练)")
#             elif ("煮饭（一般）" in t) or ("煮饭(熟练)" in t) or ("煮饭（喜欢）" in t):
#                 if "煮饭(一般)" not in result['cook_type']:
#                     result['cook_type'].append("煮饭(一般)")
#
#             elif "煮食(专业)" in t:
#                 result['cook_type'].append("煮食(专业)")
#             else:
#                 if "煮饭(一般)" not in result['cook_type']:
#                     result['cook_type'].append("煮饭(一般)")
#
#             if "老人食" in t:
#                 result['cook_type'].append("煮饭(老人食)")
#
#             if ("家庭工" in t) or ("小家庭饭" in t) or ("没做家庭工" in t) or ("没做过家庭工" in t):
#                 result['cook_type'].append("煮食(家庭工)")
#
#
#             if ("大锅饭" in t or "煮饭(非家庭的)" in t or "没做家庭工" in t or "不做家庭" in t or "没做过家庭工" in t  or "工厂饭" in t or "单位煮饭" in t or "煮饭(工厂)" in t) and "大锅饭" not in result['cook_type']:
#                 result['cook_type'].append("煮食(大锅饭)")
#
#             t = ''
#
#         if ("带人" in t) or ("带娃" in t) or ("带小孩" in t):
#             result['childcare_type'] = "带人"
#             if ("熟练带人" in t) or ("带小孩(熟练)" in t) or ("带小孩(熟练工)" in t):
#                 result['childcare_type'] = "熟练带人"
#             t = ''
#         else:
#             result['childcare_type'] = "未知"
#
#         if 'caregiver_type' not in result or not result['caregiver_type']:
#             result['caregiver_type'] = "未知"
#
#         if ("护工" in t) or ("半自理" in t) or ("能自理" in t) or ("全能" in t) or ("不做男" in t) or ("男的不做" in t):
#             if "全能" in t or "全护" in result['caregiver_type']:
#                 result['caregiver_type'] = "护工-全护(男/女)"
#                 if ("不做男" in t) or ("男的不做" in t):
#                     result['caregiver_type'] = "护工-全护(女)"
#                 if "全能(男/女)" in t:
#                     result['caregiver_type'] = "护工-全护(男/女)"
#
#             elif "半自理" in t or "半护" in result['caregiver_type']:
#                 result['caregiver_type'] = "护工-半护(男/女)"
#                 if ("不做男" in t) or ("男的不做" in t):
#                     result['caregiver_type'] = "护工-半护(女)"
#                 if "半自理(男/女)" in t:
#                     result['caregiver_type'] = "护工-半护(男/女)"
#             elif "能自理" in t or "能自理" in result['caregiver_type']:
#                 result['caregiver_type'] = "护工-能自理(男/女)"
#                 if ("不做男" in t) or ("男的不做" in t):
#                     result['caregiver_type'] = "护工-能自理(女)"
#                 if "能自理(男/女)" in t:
#                     result['caregiver_type'] = "护工-能自理(男/女)"
#             elif "护工" in t or "护工" in result['caregiver_type']:
#                 result['caregiver_type'] = "护工(男/女)"
#                 if ("不做男" in t) or ("男的不做" in t):
#                     result['caregiver_type'] = "护工(女)"
#                 if "护工(男/女)" in t:
#                     result['caregiver_type'] = "护工(男/女)"
#
#             t = ''
#
#
#         result.setdefault('job_type', [])
#         if "钟点工" in t and "钟点工" not in result['job_type']:
#             result['job_type'].append("钟点工")
#             t = ''
#
#         if "日工" in t and "日工" not in result['job_type']:
#             result['job_type'].append("日工")
#             t = ''
#
#         if "夜工" in t and "夜工" not in result['job_type']:
#             result['job_type'].append("夜工")
#             t = ''
#
#         if "临时工" in t and "临时工" not in result['job_type']:
#             result['job_type'].append("临时工")
#             t = ''
#
#
#         if "不会骑车" in t:
#             result['drive_type'] = "不会骑车"
#             t = ''
#         if "骑单车" in t:
#             result['drive_type'] = "骑单车"
#             t = ''
#
#         if "会开摩托" in t:
#             result['drive_type'] = "骑摩托"
#             t = ''
#
#         if "会骑车" in t or "会骑摩托" in t:
#             result['drive_type'] = "骑摩托"
#             t = ''
#         else:
#             result['drive_type'] = "未知"
#
#         result.setdefault('otherwork_type', [])
#
#
#         if "一对一" in t and "一对一" not in result['otherwork_type']:
#             result['otherwork_type'].append("一对一")
#             t = ''
#
#         if "接送小孩" in t and "接送小孩" not in result['otherwork_type']:
#             result['otherwork_type'].append("接送小孩")
#             t = ''
#
#         if "保安" in t and "保安" not in result['otherwork_type']:
#             result['otherwork_type'].append("保安")
#             t = ''
#
#         if ("电站" in t or "电厂" in t or "水电站" in t) and "电站" not in result['otherwork_type']:
#             result['otherwork_type'].append("电站")
#             t = ''
#
#         if "养鸡" in t and "养鸡" not in result['otherwork_type']:
#             result['otherwork_type'].append("养鸡")
#             t = ''
#
#         if "养猪" in t and "养猪" not in result['otherwork_type']:
#             result['otherwork_type'].append("养猪")
#             t = ''
#
#         if "文员" in t and "文员" not in result['otherwork_type']:
#             result['otherwork_type'].append("文员")
#             t = ''
#         if "搬运工" in t and "搬运工" not in result['otherwork_type']:
#             result['otherwork_type'].append("搬运工")
#             t = ''
#
#         if "电焊" in t and "电焊" not in result['otherwork_type']:
#             result['otherwork_type'].append("电焊")
#             t = ''
#
#         if "饭店工" in t and "饭店工" not in result['otherwork_type']:
#             result['otherwork_type'].append("饭店工")
#             t = ''
#
#         if "住夜" in t and "住夜" not in result['otherwork_type']:
#             result['otherwork_type'].append("住夜")
#             t = ''
#
#         if ("熟练工" in t or "都熟练" in t) and "熟练工" not in result['otherwork_type']:
#             result['otherwork_type'].append("熟练工")
#             t = ''
#
#         if "服务员" in t and "服务员" not in result['otherwork_type']:
#             result['otherwork_type'].append("服务员")
#             t = ''
#
#         if ("工厂" in t or "工厂工" in t) and "工厂工" not in result['otherwork_type']:
#             result['otherwork_type'].append("工厂工")
#             t = ''
#
#         if ("司机" in t or "开车" in t) and "司机" not in result['otherwork_type']:
#             result['otherwork_type'].append("司机")
#             t = ''
#
#         if ("杂工" in t or "看监控" or "搬运工" or "洗碗" in t)and "杂工" not in result['otherwork_type']:
#             result['otherwork_type'].append("杂工")
#             t = ''
#
#         if "清洁工" in t and "清洁工" not in result['otherwork_type']:
#             result['otherwork_type'].append("清洁工")
#             t = ''
#
#         if "花场" in t and "花场" not in result['otherwork_type']:
#             result['otherwork_type'].append("花场")
#             t = ''
#
#         if ("合适都行" in t or "都可以" in t or "合适都做" in t) and "工资可以都行" not in result['otherwork_type']:
#             result['otherwork_type'].append("工资可以都行")
#             t = ''
#
#
#         # 工作范围
#         result.setdefault('workingrange_type', [])
#         if "不下乡" in t and "县城内" not in result['otherwork_type']:
#             result['workingrange_type'].append("县城内")
#             t = ''
#         elif ("下乡" in t or "不走远" in t) and "基层乡下" not in result['workingrange_type']:
#             result['workingrange_type'].append("基层乡下")
#             t = ''
#
#         if ("龙仙内" in t or "不外出" in t or "可外出" in t or "要在县城做" in t or "只做龙仙" in t or "不走远" in t or "做龙仙" in t )and "县城内" not in result['otherwork_type']:
#             result['workingrange_type'].append("县城内")
#             t = ''
#         elif "外出" in t:
#             result['workingrange_type'].append("大城市")
#             t = ''
#
#         if ("可下乡" in t or "可以下乡" in t) and "基层乡下" not in result['workingrange_type']:
#             result['workingrange_type'].append("基层乡下")
#             t = ''
#
#         if ("不想在县城做" in t or "珠三角" in t or "可外出" in t or "不想龙仙做" in t) and "基层乡下" not in result['workingrange_type']:
#             result['workingrange_type'].append("大城市")
#             t = ''
#
#         if t == '':  # 如果是空字符串
#             continue
#
#
#         final_str += t + "、"  # 注意 += 不能断开
#
#     if final_str:  # 如果 final_str 不为空字符串
#         result['replenish']= final_str
#     else:
#         result['replenish'] = "未知"
#
#     return result
#
# # 处理 birth_year 补全和提取类型参数
# for person in data:
#     birth_year = person.get("birth_year")
#     record_age = person.get("record_age")
#
#     # 处理 birth_year
#     if (birth_year is None or
#             (isinstance(birth_year, float) and math.isnan(birth_year)) or
#             (isinstance(birth_year, str) and birth_year.lower() == "nan")):
#         if isinstance(record_age, int):
#             person["birth_year"] = 2025 - record_age
#
#     age = person.get('record_age')
#     birth_year = person.get('birth_year', 0)
#     if not isinstance(age, int) or age is None:
#         person['record_age'] = 2025 - person.get('birth_year', 0)
#
#     # 提取类型参数
#     types = extract_types(person.get("type", ""))
#     person['cook_type'] = types['cook_type']
#     person['childcare_type'] = types['childcare_type']
#     person['caregiver_type'] = types['caregiver_type']
#     person['job_type'] = types['job_type']
#     person['drive_type'] = types['drive_type']
#     person['clean_type'] = types['clean_type']
#     person['otherwork_type'] = types['otherwork_type']
#     person['replenish'] = types['replenish']
#
#
#     # 提取类型参数
#     comments = extract_comment(person.get("comment", ""))
#     person['talentcommenet'] = comments['talentcommenet']
#     person['work_start'] = comments['work_start']
#     person['certificate_type'] = comments['certificate_type']
#
# # 处理完成，保存回文件（也可以另存）
# output_path = r"C:\Users\Admin\Desktop\阿姨资料_接送结构_处理后.json"
# with open(output_path, "w", encoding="utf-8") as f:
#     json.dump(data, f, ensure_ascii=False, indent=2)
#
# print(f"处理完成，结果已保存到：{output_path}")



#
# import pymysql
# import json
# import math
# import datetime
#
# def clean_nan(obj):
#     if isinstance(obj, dict):
#         return {k: clean_nan(v) for k, v in obj.items()}
#     elif isinstance(obj, list):
#         return [clean_nan(i) for i in obj]
#     elif isinstance(obj, float) and math.isnan(obj):
#         return None
#     else:
#         return obj
#
# def list_to_str(val):
#     # 支持list转逗号分隔字符串；空值返回None
#     if val is None:
#         return None
#     if isinstance(val, str):
#         return val if val else None
#     if isinstance(val, list):
#         filtered = [str(i).strip() for i in val if i]
#         return ",".join(filtered) if filtered else None
#     return str(val)
#
# # 连接数据库
# conn = pymysql.connect(
#     host='192.168.1.9', user='root', password='123456',
#     database='jiazhongzhongjie', charset='utf8mb4'
# )
# cursor = conn.cursor()
#
# # 读取数据库 SET 类型允许值的函数
# def get_allowed_set_values(column_name):
#     cursor.execute(f"SHOW COLUMNS FROM jiazhong_employee LIKE '{column_name}';")
#     type_info = cursor.fetchone()[1]  # 形如: set('大锅饭','保安','电站')
#     allowed = set(v.strip("'") for v in type_info[4:-1].split("','"))
#     return allowed
#
# # 读取所有需要过滤的 SET 类型字段的允许值
# allowed_sets = {}
# for col in ['cook_type', 'job_type', 'workingrange_type', 'clean_type', 'otherwork_type', 'certificate_type', 'otherwork_type']:
#     allowed_sets[col] = get_allowed_set_values(col)
#
# def filter_set_values(val, allowed):
#     if val is None:
#         return None
#     if isinstance(val, str):
#         val = [v.strip() for v in val.split(",") if v.strip()]
#     if isinstance(val, list):
#         filtered = [v for v in val if v in allowed]
#         return ",".join(filtered) if filtered else None
#     return None
#
# # 读取 JSON 文件
# with open(r"C:\Users\Admin\Desktop\阿姨资料_接送结构_处理后.json", "r", encoding="utf-8") as f:
#     data = json.load(f)
#
# data = clean_nan(data)
#
# # 统一当前时间字符串
# now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
#
# # 预处理每条数据
# def process_entry(entry):
#     # 过滤SET字段
#     for key in allowed_sets.keys():
#         raw_val = entry.get(key)
#         filtered_val = filter_set_values(raw_val, allowed_sets[key])
#         entry[key] = filtered_val
#
#     # 字符串化电话号码字段
#     for phone_field in ['phone1', 'phone2']:
#         val = entry.get(phone_field)
#         if val is not None:
#             entry[phone_field] = str(val)
#         else:
#             entry[phone_field] = None
#
#     # 其他空值处理
#     for key in ['name', 'id_card', 'birth_year', 'record_age', 'address', 'comment',
#                 'replenish', 'year_recorded', 'childcare_type', 'caregiver_type',
#                 'drive_type', 'talentcommenet', 'work_start']:
#         if key not in entry or entry[key] == '':
#             entry[key] = None
#
#     return entry
#
# # 统一格式处理
# if isinstance(data, dict):
#     data = [process_entry(data)]
# elif isinstance(data, list):
#     data = [process_entry(item) for item in data if isinstance(item, dict)]
# else:
#     data = []
#
# # 插入 SQL，包含所有字段
# sql = """
# INSERT INTO jiazhong_employee
# (name, id_card, birth_year, record_age, address, phone1, phone2, comment,
#  replenish, year_recorded, childcare_type, caregiver_type, cook_type,
#  job_type, workingrange_type, clean_type, drive_type, otherwork_type,
#  certificate_type, talentcommenet, work_start, create_time, update_time)
# VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
# """
#
# for entry in data:
#     name = entry.get("name")
#     if not name:
#         print("跳过无效条目，没有名字:", entry)
#         continue
#     try:
#         cursor.execute(sql, (
#             name,
#             entry.get("id_card"),
#             entry.get("birth_year"),
#             entry.get("record_age"),
#             entry.get("address"),
#             entry.get("phone1"),
#             entry.get("phone2"),
#             entry.get("comment"),
#             entry.get("replenish"),
#             entry.get("year_recorded"),
#             entry.get("childcare_type"),
#             entry.get("caregiver_type"),
#             entry.get("cook_type"),
#             entry.get("job_type"),
#             entry.get("workingrange_type"),
#             entry.get("clean_type"),
#             entry.get("drive_type"),
#             entry.get("otherwork_type"),
#             entry.get("certificate_type"),
#             entry.get("talentcommenet"),
#             entry.get("work_start"),
#             now_str,
#             now_str
#         ))
#     except Exception as e:
#         print(f"插入失败，条目 name={name}，错误信息：{e}")
#
# conn.commit()
# cursor.close()
# conn.close()



#
# import pymysql
#
# # 连接数据库
# conn = pymysql.connect(
#     host='192.168.1.9', user='root', password='123456',
#     database='jiazheng_databases', charset='utf8mb4'
# )
# cursor = conn.cursor()
#
# # talentcommenet 追加“靓”，避免重复
# append_talent_sql = """
# UPDATE jiazheng_employee
# SET talentcommenet = CONCAT_WS(',', talentcommenet, '个子小')
# WHERE talentcommenet <> ''
#   AND talentcommenet IS NOT NULL
#   AND NOT FIND_IN_SET('个子小', talentcommenet);
#
# """
# cursor.execute(append_talent_sql)
#
# conn.commit()
# cursor.close()
# conn.close()
#
# print("record_age 更新完成，talentcommenet 已追加 '靓'！")



# import json
# import pymysql
#
# # JSON 文件路径
# file_path = r"C:\Users\Admin\Desktop\阿姨资料_接送结构.json"
#
# # 数据库配置
# db_config = {
#     "host": "192.168.1.9",
#     "user": "root",
#     "password": "123456",
#     "database": "jiazheng_databases",
#     "charset": "utf8mb4"
# }
#
# # 读取 JSON 文件
# with open(file_path, "r", encoding="utf-8") as f:
#     data = json.load(f)
#
# # 构建更新参数
# update_params = []
# for item in data:
#     phone1 = item.get("phone1")
#     if not phone1:
#         continue
#     phone1_str = str(phone1).strip()
#     if phone1_str in ["", "无"]:
#         continue
#
#     # 处理 workingrange_type
#     types = str(item.get("type", ""))
#     workingrange_value = None
#     if any(keyword in types for keyword in ['、外出','可外出','珠三角']):
#         # SET 类型可多选，用逗号分隔表示多个选项
#         workingrange_value = '县城内,大城市'
#
#     # 只要有值需要更新，就加入更新列表
#     if workingrange_value:
#         update_params.append((workingrange_value, phone1_str))
#
# print(f"有效待更新记录数量: {len(update_params)}")
#
# # 连接数据库
# connection = pymysql.connect(**db_config)
# cursor = connection.cursor()
#
# # 批量更新 workingrange_type
# sql = """
# UPDATE jiazheng_employee
# SET workingrange_type = %s
# WHERE phone1 = %s
# """
#
# try:
#     cursor.executemany(sql, update_params)
#     connection.commit()
#     print("更新完成！")
# except Exception as e:
#     print(f"批量更新失败，错误: {e}")
# finally:
#     cursor.close()
#     connection.close()


# import pymysql
# import pandas as pd
#
# # 1. MySQL 连接配置
# conn = pymysql.connect(
#     host='192.168.1.9',  # MySQL 地址
#     user='root',  # 用户名
#     password='123456',  # 密码
#     database='jiazheng_databases',  # 数据库名
#     charset='utf8mb4'
# )
#
# try:
#     # 2. SQL 查询数据，可以加筛选条件
#     query = """
#     SELECT *
#     FROM jiazheng_employee
#     WHERE birth_year IN (1963, 1975, 1987, 1967, 1979)
#     """
#
#     # 3. 用 pandas 读取 SQL
#     df = pd.read_sql(query, conn)
#
#     # 4. 多选字段可以保持原样，也可以用逗号分隔成字符串
#     multi_fields = ['cook_type', 'job_type', 'workingrange_type', 'clean_type',
#                     'otherwork_type', 'certificate_type', 'talentcommenet']
#
#     for field in multi_fields:
#         if field in df.columns:
#             df[field] = df[field].fillna('').astype(str)
#
#     # 5. 导出 Excel
#     output_file = "jiazheng_employee_filtered.xlsx"
#     df.to_excel(output_file, index=False)
#     print(f"✅ 数据已成功导出到 {output_file}")
# finally:
#     conn.close()


