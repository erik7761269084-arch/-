
import re

lines = [
    "3. [ARTGRAVIA] VOL.502  美女 (https://telegra.ph/vaeA7j-12-31)",
    "4. [ARTGRAVIA] VOL.510  美女 (https://telegra.ph/aaqe6r-12-31)",
    "5. [ARTGRAVIA] VOL.539  美女 (https://telegra.ph/2Y3qAb-12-31)",
    "6. [ARTGRAVIA] VOL.559  美女 (https://telegra.ph/bQJZni-12-31)",
    "1. [ARTGRAVIA] VOL.342  美女 (https://telegra.ph/nqQN7j-12-31)",
    "10. [ARTGRAVIA] VOL.466 美女 (https://telegra.ph/2aeaQ3-12-30)",
]

def get_vol_number(line):
    match = re.search(r"VOL\.(\d+)", line)
    return int(match.group(1)) if match else float("inf")

# 按 VOL.xxx 排序
sorted_lines = sorted(lines, key=get_vol_number)

for line in sorted_lines:
    print(line)