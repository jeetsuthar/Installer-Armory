---
title: Python
sidebar_position: 1
description: ""
---

<!-- Install the Python in the Windows  -->

### Python for multiple operating System

import First from '../../../static/Images/Python/First_step.jpg';
import Second from '../../../static/Images/Python/Second_step.png';
import Third from '../../../static/Images/Python/Third_step.png';
import Fourth from '../../../static/Images/Python/final_step.png';

## Installing Python on Windows

:::info
**Attention :** For optimal results, it is essential to follow the steps sequentially. Do not skip any steps.
:::

**Step 1** : Open your web browser and visit [https://www.python.org/downloads/](https://www.python.org/downloads/) .

**Step 2** : `Look for the latest Python 3 version recommended)` and click on the appropriate installer for your operating system .

**Step 3** : Once the download is complete,` double-click the installer file` to start the installation process.

:::tip
Let's proceed with the help of some `Images` to make the steps easier to understand .
:::
Make sure to check both the checkboxes:

- Use admin privileges when installing py.exe
- Add python.exe to PATH : Make sure to check the option to **Add Python to PATH** if available. This makes it easier to use Python from the command line.

After that click on the `Customize installation` to proceed.  
<img src={First} alt="First_step" width="600" height="400" style={{border: "2px solid", padding: "5px", borderRadius: "5px", width: "100%", height: "auto", maxWidth: "600px"}}/>

#### ensure you check the following options (In Optional Features)

- Documentation
- pip
- td/tk and IDLE
- Python test suite
- py launcher
- Ensure the option for all users (requires admin privileges) is checked.

After selecting the options, click on the `Next button` to proceed.
<img src={Second} alt="Second_step" width="600" height="400" style={{border: "2px solid", padding: "5px", borderRadius: "5px", width: "100%", height: "auto", maxWidth: "600px"}}/>

The following options are available under Advanced Options. Some are automatically selected, and some need to be manually checked:

- Install Python 3.12 for all users.
- Precompile standard library

Those two options need to be manually checked.

:::warning
If any of the options shown in the image below are not checked in your operating system, we recommend that you check all the options mentioned.
:::

After selecting the options, click on the `Install button` to proceed.
<img src={Third} alt="Third_step" width="600" height="400" style={{border: "2px solid", padding: "5px", borderRadius: "5px", width: "100%", height: "auto", maxWidth: "600px"}}/>

After the installation, you will see a page displaying `Setup was successful`. Click on the `Close button`.

**congratulations** 👏 — you have successfully installed Python on your operating system.

<img src={Fourth} alt="Fourth_step" width="600" height="400" style={{border: "2px solid", padding: "5px", borderRadius: "5px", width: "100%", height: "auto", maxWidth: "600px"}}/>

**Step 4** : Open a command prompt (Windows) and type and paste

```bash
python --version
```

If Python is installed correctly, you should see the installed version number like this `Python 3.12.4` .

That's it! You now have Python installed on your computer.
Let's try running some Python code. Choose any folder, open it in the code editor, and create a file named index.py. Write the following code inside that file:

```jsx title="index.py"
print("Hello, world!");
```

After that, open the terminal in your code editor and run the following command to execute the code:

```
python3 index.py
```

<!-- Install the Python in the Linux  -->

## Installing Python on Linux

:::info
**Attention :** For optimal results, it is essential to follow the steps sequentially. Do not skip any steps.
:::
**Step 1 : Upgrading and Updating your Operating System**

Before installing any new software, it's a good idea to update and Upgrade your system packages to ensure you have the latest versions.

```bash
sudo apt update
sudo apt upgrade
```

**Step 2 : Install Python**

Install Python from the default repositories. This will install a stable version of Python that is sufficient for most needs.

```bash
sudo apt install python3
```

**Step 3 : Verify Python Installation**

Check the installed version to confirm it was successfully installed.

```bash
python3 --version
```

**Step 4 : Install pip (Optional)**

If you need pip (the Python package installer), you can install it with.

```bash
sudo apt install python3-pip
pip3 --version
```

:::note

- Using the default repositories : This method uses the default package manager repositories which are easier to manage and don’t require adding additional PPAs or installing extra software.
- Basic tools : This setup is usually sufficient for basic Python development and running Python scripts.
  :::

<!-- Python installtion in the macOs -->

## Installing Python on MacOS

:::info
**Attention :** For optimal results, it is essential to follow the steps sequentially. Do not skip any steps.
:::
**Step 1 : Check if Python is Already Installed**

- Open your Terminal application (found in Applications -> Utilities).
- Type `python3 --version` and press Enter.
  - If Python 3 is installed, it will display the version number.
  - If not, proceed to the next step.

```bash
python --version
python3 --version
```

**Step 2 : Download the Python Installer**

- Go to the official Python website: https://www.python.org/downloads/ .
- Click on the `Download Python` button. This will automatically detect your operating system.
- Look for the latest stable Python 3 release (e.g., Python 3.12.x) and download the macOS installer (usually a .pkg file).

**Step 3 : Run the Installer**

import one from '../../../static/Images/Python/1.png';
import two from '../../../static/Images/Python/2.png';
import three from '../../../static/Images/Python/3.png';
import four from '../../../static/Images/Python/4.png';
import five from '../../../static/Images/Python/5.png';
import six from '../../../static/Images/Python/6.png';

- Double-click the downloaded `.pkg` file to start the installation process.
- You will see a pop-up window. Click `Continue` to proceed.
  <img src={one} alt="First_step" width="600" height="400" style={{border: "2px solid", padding: "5px", borderRadius: "5px", width: "100%", height: "auto", maxWidth: "600px"}}/>

- If you want to read the license terms and conditions, please do so. Otherwise, scroll down and click the `Continue` button.
  <img src={two} alt="First_step" width="600" height="400" style={{border: "2px solid", padding: "5px", borderRadius: "5px", width: "100%", height: "auto", maxWidth: "600px"}}/>

- Read everything, then click the `Continue` button.
  <img src={three} alt="First_step" width="600" height="400" style={{border: "2px solid", padding: "5px", borderRadius: "5px", width: "100%", height: "auto", maxWidth: "600px"}}/>

- Read everything, then click the `Continue` button.
  <img src={four} alt="First_step" width="600" height="400" style={{border: "2px solid", padding: "5px", borderRadius: "5px", width: "100%", height: "auto", maxWidth: "600px"}}/>

- Agree to all the terms and conditions, then click the `Agree` button.
  <img src={five} alt="First_step" width="600" height="400" style={{border: "2px solid", padding: "5px", borderRadius: "5px", width: "100%", height: "auto", maxWidth: "600px"}}/>

- Now we are at the final stage of the installation. Click the `Install` button
  <img src={six} alt="First_step" width="600" height="400" style={{border: "2px solid", padding: "5px", borderRadius: "5px", width: "100%", height: "auto", maxWidth: "600px"}}/>

**Step 4 : Verify Installation**

- Open the Terminal again.
- Type `python3 --version` and press Enter.
  - This should display the version of Python you just installed.

```bash
python --version
python3 --version
```

:::tip

- **Choose the Right Python Version** : While Python 2 is older, some projects might still rely on it. However, it's generally recommended to use Python 3 for new projects.
- **Using a Virtual Environment** : For managing different Python projects with different dependencies, consider using a virtual environment. Tools like `venv` or `virtualenv` can help with this.
- **Text Editor or IDE** : To write Python code effectively, you'll need a text editor or Integrated Development Environment (IDE). Popular options include Visual Studio Code, Sublime Text, PyCharm, and Atom.
  :::
