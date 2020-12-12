import os
import glob
import shutil
from PyQt5 import uic, QtWidgets
from PIL import Image
#from fpdf import FPDF
 # from PyQt5.QtWidgets import QApplication
Form, _ = uic.loadUiType("d2.ui")

global text_formm

path_out="D:\\Downloads\\RR\\RRR\\ZNF\\"
class Ui(QtWidgets.QDialog,Form):

    def __init__(self):
        super(Ui, self).__init__()
        self.setupUi(self)
#
        self.lineEdit_f2.setText("D:\\Downloads\\RR\\RRR\\ZNF\\")
        self.pushButton_2.clicked.connect(self.printButtonPressed_2)
        self.pushButton_3.clicked.connect(self.printButtonPressed_3)
        self.pushButton_4.clicked.connect(self.ButtonPressed_4)

    def printButtonPressed_2(self):
        global path_out
        path_out=self.lineEdit_f2.text()
        self.label_29.setText("")

    def ButtonPressed_4(self):
        sys.exit(app.exec_())

    def printButtonPressed_3(self):
        global path_out
        ciff1=[]
        ciff2=[]
        ciff3=[]
        ciff4=[]
        for i in range(6):
            j=str(i+1).strip()
            j1=str(i+11).strip()
            j2=str(i+21).strip()
            j3=str(i+31).strip()
            exec('ciff1.append(self.lineEdit_%s.text())' % j)
            exec('ciff2.append(self.lineEdit_%s.text())' % j1)
            exec('ciff3.append(self.lineEdit_%s.text())' % j2)
            exec('ciff4.append(self.lineEdit_%s.text())' % j3)


        for i in range(6):
            if len(ciff1[i])>0:         # 1 значные
                name='abb'+ciff1[i]+'.png'
                namef=ciff1[i]+'.png'
                img = Image.new('RGB', (500*1, 2100 ))
                img1 = Image.open("./media/"+name)
                img.paste(img1, (0, 0))
                img.save(path_out+namef)
            if len(ciff2[i]) > 0:            # 2 значные
                name = 'abb' + ciff2[i][0] + '.png'
                name2 = 'abb' + ciff2[i][1] + '.png'
                namef = ciff2[i] + '.png'
                img = Image.new('RGB', (500 * 2, 2100))
                img1 = Image.open("./media/" + name)
                img2 = Image.open("./media/" + name2)
                # img3 = Image.open("./media/"+'abb3.png')
                img.paste(img1, (0, 0))
                img.paste(img2, (500, 0))
                # img.paste(img3, (500 *2, 0))
                # img.show()
                img.save(path_out + namef)
            if len(ciff3[i]) > 0:               # 3 значные
                name = 'abb' + ciff3[i][0] + '.png'
                name2 = 'abb' + ciff3[i][1] + '.png'
                name3 = 'abb' + ciff3[i][2] + '.png'
                namef = ciff3[i] + '.png'
                img = Image.new('RGB', (500 * 3, 2100))
                img1 = Image.open("./media/" + name)
                img2 = Image.open("./media/" + name2)
                img3 = Image.open("./media/" + name3)
                img.paste(img1, (0, 0))
                img.paste(img2, (500, 0))
                img.paste(img3, (500 *2, 0))
                img.save(path_out + namef)
            if len(ciff4[i]) > 0:               # 4 значные
                name = 'abb' + ciff4[i][0] + '.png'
                name2 = 'abb' + ciff4[i][1] + '.png'
                name3 = 'abb' + ciff4[i][2] + '.png'
                name4 = 'abb' + ciff4[i][3] + '.png'
                namef = ciff4[i] + '.png'
                img = Image.new('RGB', (500 * 4, 2100))
                img1 = Image.open("./media/" + name)
                img2 = Image.open("./media/" + name2)
                img3 = Image.open("./media/" + name3)
                img4 = Image.open("./media/" + name4)
                img.paste(img1, (0, 0))
                img.paste(img2, (500, 0))
                img.paste(img3, (500 *2, 0))
                img.paste(img4, (500 *3, 0))
                img.save(path_out + namef)
        self.label_29.setText("Сохранено")


if __name__ =="__main__":
    import sys
    app = QtWidgets.QApplication(sys.argv)
    w = Ui()
    w.show()
    sys.exit(app.exec_())