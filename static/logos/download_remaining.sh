#!/bin/bash
# 尝试从多个来源下载剩余的logo

# 使用简单的SVG转PNG或直接下载
wget -q --user-agent="Mozilla/5.0" "https://cdn.simpleicons.org/tesla/CC0000" -O tesla.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://cdn.simpleicons.org/nvidia/76B900" -O nvidia.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://cdn.simpleicons.org/netflix/E50914" -O netflix.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://cdn.simpleicons.org/meta/0081FB" -O meta.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://cdn.simpleicons.org/alibaba/FF6A00" -O alibaba.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://cdn.simpleicons.org/tencent/EB001B" -O tencent.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://cdn.simpleicons.org/morganstanley/03495E" -O morgan-stanley.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://cdn.simpleicons.org/jpmorgan/006649" -O jpmorgan.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://cdn.simpleicons.org/blackrock/010101" -O blackrock.png 2>&1
wget -q --user-agent="Mozilla/5.0" "https://cdn.simpleicons.org/vanguard/0066CC" -O vanguard.png 2>&1

echo "Checking downloads..."
for f in tesla nvidia netflix meta alibaba tencent morgan-stanley jpmorgan blackrock vanguard; do
    if [ -f "${f}.png" ] && [ -s "${f}.png" ]; then
        echo "✓ $f"
    else
        echo "✗ $f"
        rm -f "${f}.png" 2>/dev/null
    fi
done
