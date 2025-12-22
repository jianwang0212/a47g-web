#!/bin/bash
# 从Wikipedia下载logo

wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png" -O google.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png" -O microsoft.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/195px-Apple_logo_black.svg.png" -O apple.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" -O amazon.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Meta-Logo.svg/2560px-Meta-Logo.svg.png" -O meta.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Tesla_Motors.svg/2560px-Tesla_Motors.svg.png" -O tesla.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/NVIDIA_logo.svg/2560px-NVIDIA_logo.svg.png" -O nvidia.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Netflix.svg/2560px-Netflix.svg.png" -O netflix.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png" -O oracle.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Alibaba_Group_logo.svg/2560px-Alibaba_Group_logo.svg.png" -O alibaba.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tencent_Logo.svg/2560px-Tencent_Logo.svg.png" -O tencent.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/ByteDance_Logo.svg/2560px-ByteDance_Logo.svg.png" -O bytedance.png 2>&1

# 金融机构
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/2560px-Goldman_Sachs.svg.png" -O goldman-sachs.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Morgan_Stanley_logo.svg/2560px-Morgan_Stanley_logo.svg.png" -O morgan-stanley.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/JPMorgan_Chase_%26_Co._logo.svg/2560px-JPMorgan_Chase_%26_Co._logo.svg.png" -O jpmorgan.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/BlackRock_logo.svg/2560px-BlackRock_logo.svg.png" -O blackrock.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Vanguard_logo.svg/2560px-Vanguard_logo.svg.png" -O vanguard.png 2>&1

# 大学
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/University_of_Queensland_logo.svg/2560px-University_of_Queensland_logo.svg.png" -O uq.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Oxford_University_Coat_of_Arms.svg/2560px-Oxford_University_Coat_of_Arms.svg.png" -O oxford.png 2>&1

echo "Download completed. Checking valid PNG files..."
file *.png 2>/dev/null | grep PNG | wc -l
echo "valid PNG files found"
